export interface Org {
  created_at: string;
  id: number;
  org_country: number;
  org_director: string;
  org_key_id: number | null;
  org_name: string;
  org_region: number;
  org_status: number;
  org_tin: number;
  updated_at: string;
  [key: string]: number | string | null; // Index signature
}
