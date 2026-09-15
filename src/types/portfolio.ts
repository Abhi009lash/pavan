export interface ProjectTab {
  id: number;
  label: string;
  iconColor: string;
  tabColor: string;
  textColor: string;
}

export interface ProjectItem {
  id: number;
  numberStr: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  watermarkColor: string;
  tabHeaderColor: string;
  mediaSrc: string;
  mediaAlt: string;
  discoverLink?: string;
  topTabs: ProjectTab[];
  bottomTabs: ProjectTab[];
}

export interface GridProjectItem {
  id: number;
  numberStr: string;
  tagLabel: string;
  tagBg: string;
  tagColor: string;
  title: string;
  description: string;
  portfolioNote: string;
  bgColor: string;
  textColor: string;
  watermarkColor: string;
  mediaSrc: string;
  mediaAlt: string;
  discoverLink?: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  comment: string;
}

export interface FormErrors {
  name?: string;
  mobile?: string;
  comment?: string;
}
