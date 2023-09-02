import {templateResolvers} from "./templateResolvers";

export class EventNotSupported extends Error {
  constructor(event: string) {
    const supportedEvents = Object.values(templateResolvers).join(", ");
    super(
      `event "${event}" is not supported. Supported events are: "${supportedEvents}".`,
    );
  }
}
