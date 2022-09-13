import { SortOrder } from "../../util/SortOrder";

export type ScanOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
