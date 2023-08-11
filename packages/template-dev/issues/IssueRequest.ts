import {GetIssueQuery} from "@ipn/issues-gql";
import {Request} from "express";

export interface IssueRequest extends Request {
  issue: GetIssueQuery;
}
