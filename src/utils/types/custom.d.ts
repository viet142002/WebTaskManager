import { ErrorWithCode as CusError } from "@/utils/helper";

declare module "*.svg?react" {
  const content: FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
    interface Window {
        ErrorWithCode: typeof CusError;
    }

    const ErrorWithCode: typeof CusError;
}

export {};