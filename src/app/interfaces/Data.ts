export interface Section {
  meta: SectionMeta;
  action: SectionAction;
  type: string;
  content: object[];
}

export interface SectionMeta {
  title: string;
  description: string;
}

export interface SectionAction {
  title: string;
  url: string;
}
