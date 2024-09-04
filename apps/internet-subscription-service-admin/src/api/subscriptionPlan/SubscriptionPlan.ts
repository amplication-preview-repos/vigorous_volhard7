import { Subscription } from "../subscription/Subscription";

export type SubscriptionPlan = {
  createdAt: Date;
  durationInMonths: number | null;
  id: string;
  planDescription: string | null;
  planName: string | null;
  price: number | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
