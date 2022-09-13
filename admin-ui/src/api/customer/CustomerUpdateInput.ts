import { ScanUpdateManyWithoutCustomersInput } from "./ScanUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  scans?: ScanUpdateManyWithoutCustomersInput;
};
