import {Context} from "../action/Context";
import {Reader} from "fp-ts/lib/Reader";

type Event = string;
type Action = string;

export type TTemplateResolverTuple = [
  Event[],
  Action[],
  Reader<Context, Promise<string>>,
];
