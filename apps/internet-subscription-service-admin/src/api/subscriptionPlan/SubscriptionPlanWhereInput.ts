import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SubscriptionPlanWhereInput = {
  durationInMonths?: IntNullableFilter;
  id?: StringFilter;
  planDescription?: StringNullableFilter;
  planName?: StringNullableFilter;
  price?: FloatNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
