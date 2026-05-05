export type TiptapMark = {
  type: string;
  attrs?: Record<string, unknown>;
};

export type TiptapContent = {
  type?: string;
  attrs?: Record<string, unknown>;
  content?: TiptapContent[];
  marks?: TiptapMark[];
  text?: string;
};
