import {IssueHeadFragment, IssueState} from "../lib/graphql";
import {toIssueHeadTemplate} from "./toIssueHeadTemplate";
import type {Meta, StoryObj} from "@storybook/html";

const meta = {
  title: "Issue/IssueHead",
  tags: ["autodocs"],
  render: args => toIssueHeadTemplate(args),
} satisfies Meta<IssueHeadFragment>;

export default meta;
type Story = StoryObj<IssueHeadFragment>;

export const Primary: Story = {
  args: {
    author: {
      login: "octocat",
    },
    title: "Hello World",
    createdAt: "2021-01-01T00:00:00Z",
    number: 1,
    state: IssueState.Open,
  },
};
