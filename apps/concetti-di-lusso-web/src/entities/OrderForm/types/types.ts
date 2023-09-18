export type RecipientFormType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
};

export type OrderFormProps = {
  createOrderHandler: (buyerInfo: RecipientFormType) => void;
};
