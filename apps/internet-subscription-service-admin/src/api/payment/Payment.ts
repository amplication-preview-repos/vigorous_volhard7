import { Subscription } from "../subscription/Subscription";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
