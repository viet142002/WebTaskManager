declare module "*.svg?react" {
  const content: FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare interface ErrorConstructor {
    code: number
}