import {DocumentNode} from "graphql";
import {Variables} from "graphql-request";

export type TQueryTuple = readonly [DocumentNode, Variables];
