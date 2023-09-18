// Components
import { Box, Button, Group, TextInput } from '@mantine/core';
// Hooks
import { hasLength, isEmail, useForm } from '@mantine/form';
// Types
import { OrderFormProps } from './types/types';

export const OrderForm = (props: OrderFormProps) => {
  const { createOrderHandler } = props;

  const form = useForm({
    initialValues: {
      firstName: 'Name',
      lastName: 'Last Name',
      phone: '141-110-1000',
      email: 'namelastname@email.com',
      address: 'Country, City, Address',
    },
    validate: {
      firstName: hasLength(
        { min: 2, max: 10 },
        'Name must be 2-10 characters long'
      ),
      lastName: hasLength(
        { min: 2, max: 10 },
        'Last name must be 2-10 characters long'
      ),
      phone: hasLength({ min: 5, max: 15 }, 'Enter your phone number'),
      email: isEmail('Invalid email'),
      address: hasLength({ min: 10, max: 100 }, 'Enter your address'),
    },
  });

  const formElements = [
    {
      label: 'First Name',
      placeholder: 'First Name',
      inputProps: form.getInputProps('firstName'),
      withAsterisk: true,
    },
    {
      label: 'Last Name',
      placeholder: 'Last Name',
      inputProps: form.getInputProps('lastName'),
      withAsterisk: true,
    },
    {
      label: 'Phone Number',
      placeholder: 'Phone Number',
      inputProps: form.getInputProps('phone'),
      withAsterisk: true,
    },
    {
      label: 'Email',
      placeholder: 'Email',
      inputProps: form.getInputProps('email'),
      withAsterisk: true,
    },
    {
      label: 'Address',
      placeholder: 'Address',
      inputProps: form.getInputProps('address'),
      withAsterisk: true,
    },
  ];

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        createOrderHandler(values);
      })}
    >
      <Box maw={400} mx="auto">
        {formElements.map((elem) => (
          <TextInput
            key={elem.label}
            h={60}
            label={elem.label}
            placeholder={elem.placeholder}
            {...elem.inputProps}
            withAsterisk={elem.withAsterisk}
          />
        ))}
        <Group position="center" mt="xl">
          <Button color="green" variant="filled" type="submit">
            Create
          </Button>
        </Group>
      </Box>
    </form>
  );
};
