import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlanOrderByInput = {
  createdAt?: SortOrder;
  durationInMonths?: SortOrder;
  id?: SortOrder;
  planDescription?: SortOrder;
  planName?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
