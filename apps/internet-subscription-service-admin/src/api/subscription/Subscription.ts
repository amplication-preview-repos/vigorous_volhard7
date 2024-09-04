import { Payment } from "../payment/Payment";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  payments?: Array<Payment>;
  startDate: Date | null;
  status?: "Option1" | null;
  subscriptionPlan?: SubscriptionPlan | null;
  updatedAt: Date;
  user?: User | null;
};
