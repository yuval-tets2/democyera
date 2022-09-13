import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScanCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  status?: "Success" | "Failed" | null;
};
