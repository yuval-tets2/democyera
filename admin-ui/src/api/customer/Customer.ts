import { Scan } from "../scan/Scan";

export type Customer = {
  createdAt: Date;
  id: string;
  name: string | null;
  phone: string | null;
  scans?: Array<Scan>;
  updatedAt: Date;
};
