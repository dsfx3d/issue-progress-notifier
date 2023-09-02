declare module "*.css" {
  const content: string;
  export default content;
}

declare module "posthtml-remove-attributes" {
  import {Plugin} from "posthtml";
  export default function removeAttributesPlugin(
    attributes: string[],
  ): Plugin<unknown>;
}
