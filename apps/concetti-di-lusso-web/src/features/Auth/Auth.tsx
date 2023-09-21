// Components
import { Button, Menu, PasswordInput, TextInput } from '@mantine/core';
// Hooks
import { useForm } from '@mantine/form';
import { useProtectedMutation, useSignInMutation } from './api/authApi';
import { useDispatch } from 'react-redux';
// Store
import { authorized, useAuth } from './store/authSlice';
// Styles
import classes from './styles.module.scss';

export const Auth = ({ opened }: { opened: boolean }) => {
  // Api
  const [signIn] = useSignInMutation();
  const [attemptAccess, { data }] = useProtectedMutation();
  // Cart Api

  const dispatch = useDispatch();
  const auth = useAuth();

  const form = useForm({
    initialValues: {
      email: 'olivier@mail.com',
      password: 'bestPassw0rd',
    },
    transformValues: (values) => ({
      email: values.email,
      password: values.password,
    }),
  });

  const onSubmitHandler = form.onSubmit(async (values) => {
    try {
      const req = await signIn(JSON.stringify(values, null, 2));

      const res = req;

      // Field Errors
      if ('error' in res && 'data' in res.error) {
        form.setErrors({
          email: true,
          password: `${res.error.data}`,
        });
      }

      if ('data' in res) {
        // Log Out
        if (auth.user.accessToken !== null) {
          dispatch(
            authorized({ user: { email: null, id: null, accessToken: null } })
          );
          return;
        }

        // Sign In
        dispatch(
          authorized({
            user: { ...res.data.user, accessToken: res.data.accessToken },
          })
        );
      }
    } catch (e) {
      console.error(e, 'Auth onSubmit');
    }
  });

  const onClickHandler = () => {
    try {
      const id = auth.user.id;
      attemptAccess(id);
    } catch (e) {
      console.error(e, 'Auth onClick');
    }
  };

  // UI
  const authorizedUser =
    auth.user.accessToken === null ? undefined : 'authorized';

  return (
    <Menu position="bottom-end" opened={opened}>
      <Menu.Dropdown>
        <Menu.Item component="div">
          <form onSubmit={onSubmitHandler}>
            <TextInput
              className={classes.emailInput}
              placeholder="E-mail"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              className={classes.passwordInput}
              {...form.getInputProps('password')}
            />
            <Button
              className={classes.logInLogOutButton}
              color={authorizedUser && 'blue'}
              type="submit"
              mt="md"
            >
              {authorizedUser ? 'Log Out' : 'Sign In'}
            </Button>

            <Button
              className={classes.attemptButton}
              color={data !== undefined ? 'green' : 'dark'}
              onClick={onClickHandler}
            >
              {`Attempt: ${data === undefined ? 'Unauthorized' : 'Authorized'}`}
            </Button>
          </form>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
