import { ScanUpdateManyWithoutCustomersInput } from "./ScanUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  phone?: string | null;
  scans?: ScanUpdateManyWithoutCustomersInput;
};
