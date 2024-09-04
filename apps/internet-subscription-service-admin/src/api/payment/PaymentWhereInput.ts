import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: "Option1";
  subscription?: SubscriptionWhereUniqueInput;
};
