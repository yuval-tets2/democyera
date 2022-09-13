import { Customer } from "../customer/Customer";

export type Scan = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  description: string | null;
  id: string;
  status?: "Success" | "Failed" | null;
  updatedAt: Date;
};
