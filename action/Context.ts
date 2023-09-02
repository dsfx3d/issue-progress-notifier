import {Context as Base} from "@actions/github/lib/context";
import {GraphQLClient} from "graphql-request";
import {TTemplateResolverTuple} from "../template-compiler/TTemplateResolverTuple";

export class Context extends Base {
  readonly graphqlClient = new GraphQLClient(this.graphqlUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  constructor(public readonly templateResolvers: TTemplateResolverTuple[]) {
    super();
  }
}
