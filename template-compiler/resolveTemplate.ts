import {Context} from "../action/Context";
import {Reader} from "fp-ts/lib/Reader";

export const resolveTemplate: Reader<Context, Promise<string>> = context => {
  const resolver = context.templateResolvers.find(
    ([events, actions]) =>
      events.includes(context.eventName) &&
      (!context.payload.action || actions.includes(context.payload.action)),
  );
  return resolver![2](context);
};
