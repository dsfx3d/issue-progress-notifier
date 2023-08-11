import {GraphQLClient} from "graphql-request";
import {env} from "./env";
import {GetIssueDocument} from "@ipn/issues-gql";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${env.GH_ACCESS_TOKEN}`,
  },
});

client
  .request(GetIssueDocument, {
    name: "issue-progress-notifier",
    owner: "dsfx3d",
    issue: 3,
  })
  .then(res => {
    console.log(JSON.stringify(res));
  })
  .catch(err => {
    console.error(err);
  });
