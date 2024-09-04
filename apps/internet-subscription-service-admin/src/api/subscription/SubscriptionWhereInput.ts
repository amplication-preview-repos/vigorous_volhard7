import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
