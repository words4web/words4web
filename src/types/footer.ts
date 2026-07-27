export interface FooterLink {
  label: string;
  href: string;
}

export interface OfficeDetail {
  email: string;
  phone: string;
  address: string;
}

export interface FooterData {
  quickLinks: FooterLink[];
  services: FooterLink[];
  mainOffice: OfficeDetail;
  branchOffice: OfficeDetail;
}
