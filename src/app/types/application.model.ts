export interface Application {
  id: number;
  application_number: number;
  applicant_type: string;
  applicant_name: string;
  applicant_address: string;
  verification_date: string ;
  status: string;
  process: string;
  [key: string]: number | string | null; // Index signature
}
