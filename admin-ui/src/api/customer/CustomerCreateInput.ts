import { ScanCreateNestedManyWithoutCustomersInput } from "./ScanCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  phone?: string | null;
  scans?: ScanCreateNestedManyWithoutCustomersInput;
};
