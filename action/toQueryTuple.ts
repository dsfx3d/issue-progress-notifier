import {TQueryTuple} from "./TQueryTuple";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {Variables} from "graphql-request";

export function toQueryTuple<TQuery, TVars extends Variables>(
  doc: TypedDocumentNode<TQuery, TVars>,
  variables: TVars,
): TQueryTuple {
  return [doc, variables] as const;
}
