import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
