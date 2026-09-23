export type ContentFile = {
  name: string;
  content?: string;
  src?: string;
  command?: string;
};

export type ContentSection = "about" | "projects" | "writings" | "ideas" | "memories";
