import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScanWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Success" | "Failed";
};
