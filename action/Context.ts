import {Context as Base} from "@actions/github/lib/context";
import {EventAction} from "./EventAction";
import {GraphQLClient} from "graphql-request";

export class Context extends Base {
  readonly eventAction =
    `${this.eventName} ${this.payload.action}` as EventAction;

  readonly graphqlClient = new GraphQLClient(this.graphqlUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
}
