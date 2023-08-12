import {type GraphQLClient, Variables} from "graphql-request";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {type VariablesAndRequestHeadersArgs} from "graphql-request/build/esm/types";

export const createThunkFactory =
  <TResult, TVars extends Variables = Variables>(
    document: TypedDocumentNode<TResult, TVars>,
  ) =>
  (client: GraphQLClient) =>
  (...variables: VariablesAndRequestHeadersArgs<TVars>) =>
    client.request(document, ...variables);
