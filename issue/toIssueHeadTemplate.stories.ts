import {IssueHeadFragment, IssueState} from "../lib/graphql";
import {toHtml} from "../html-compiler/toHtml";
import {toIssueHeadTemplate} from "./toIssueHeadTemplate";
import css from "$lib/styles.css?inline";
import type {Meta, StoryObj} from "@storybook/html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/IssueHead",
  tags: ["autodocs"],
  render: args =>
    toHtml({
      body: toIssueHeadTemplate(args),
      css,
    }),
} satisfies Meta<IssueHeadFragment>;

export default meta;
type Story = StoryObj<IssueHeadFragment>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
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
