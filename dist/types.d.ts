interface runOption {
    command: string;
    args: string[];
}
type Run = (option: runOption) => void;

export type { Run, runOption };
