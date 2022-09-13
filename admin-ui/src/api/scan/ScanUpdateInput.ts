import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScanUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  status?: "Success" | "Failed" | null;
};
