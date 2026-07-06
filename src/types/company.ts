export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  mission: string;
  foundingYear: number;
  location: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}
