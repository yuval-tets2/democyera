import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScanListRelationFilter } from "../scan/ScanListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  scans?: ScanListRelationFilter;
};
