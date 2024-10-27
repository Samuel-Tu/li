export interface runOption {
  command: string;
  args: string[];
}

export type Run = (option: runOption) => void;
