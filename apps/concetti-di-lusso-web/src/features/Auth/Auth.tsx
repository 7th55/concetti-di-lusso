// Components
import { Button, PasswordInput, TextInput } from '@mantine/core';
// Hooks
import { useForm } from '@mantine/form';
import { useProtectedMutation, useSignInMutation } from './api/authApi';
import { useDispatch } from 'react-redux';
// Store
import { authorized, useAuth } from './store/authSlice';
// Types
import { AuthState } from './store/authSlice';

export const Auth = () => {
  const dispatch = useDispatch();
  const authorization = useAuth();
  const [signIn, { isLoading }] = useSignInMutation();

  const auth = useAuth();
  const [attemptAccess, { data, error, isLoading: isLoadingProtected }] =
    useProtectedMutation();

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
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          const res: any = await signIn(JSON.stringify(values, null, 2));

          if (auth.user !== undefined) {
            dispatch(authorized({ user: undefined, token: undefined }));
            return;
          }
          const data: AuthState = {
            user: res ? res.data.user : undefined,
            token: res ? res.data.accessToken : undefined,
          };
          dispatch(authorized(data));
        } catch (e) {
          console.log(e);
        }
      })}
    >
      <TextInput placeholder="E-mail" {...form.getInputProps('email')} />
      <PasswordInput {...form.getInputProps('password')} />
      <Button color={authorization.token && 'blue'} type="submit" mt="md">
        {authorization.token ? 'Log Out' : 'Sign In'}
      </Button>

      <Button
        color={data !== undefined ? 'green' : 'dark'}
        onClick={async () => {
          try {
            const id =
              auth.user && auth.user.id !== undefined ? auth.user.id : 0;
            await attemptAccess(id);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {`Attempt: ${data === undefined ? 'Unauthorized' : 'Authorized'}`}
      </Button>
    </form>
  );
};
