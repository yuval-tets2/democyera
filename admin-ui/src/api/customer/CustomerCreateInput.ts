import { ScanCreateNestedManyWithoutCustomersInput } from "./ScanCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  scans?: ScanCreateNestedManyWithoutCustomersInput;
};
