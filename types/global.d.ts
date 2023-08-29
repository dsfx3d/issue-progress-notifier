declare module "$lib/styles.css?inline" {
  const content: string;
  export default content;
}

declare module "generate-github-markdown-css" {
  export function getCss(): string;
}
