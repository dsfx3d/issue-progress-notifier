import {IssueOpenedQuery, IssueState} from "../lib/graphql";
import {toIssueOpenedTemplate} from "./toIssueOpenedTemplate";
import type {Meta, StoryObj} from "@storybook/html";

const meta = {
  title: "Issue/IssueOpened",
  tags: ["autodocs"],
  render: args => toIssueOpenedTemplate(args),
} satisfies Meta<IssueOpenedQuery>;

export default meta;
type Story = StoryObj<IssueOpenedQuery>;

export const Primary: Story = {
  args: {
    repository: {
      nameWithOwner: "octocat/hello-world",
      issue: {
        author: {
          login: "octocat",
        },
        title:
          "Test issue notifier action with all features available in GitHub markdown",
        number: 79,
        state: IssueState.Open,
        comments: {
          totalCount: 0,
        },
        bodyText: "hello world",
        bodyHTML:
          '<h1 dir="auto">GitHub Markdown Demo</h1>\n<h2 dir="auto">Table of Contents</h2>\n<ol dir="auto">\n<li><a href="#headers">Headers</a></li>\n<li><a href="#emphasis">Emphasis</a></li>\n<li><a href="#lists">Lists</a></li>\n<li><a href="#links">Links</a></li>\n<li><a href="#images">Images</a></li>\n<li><a href="#code-blocks">Code Blocks</a></li>\n<li><a href="#tables">Tables</a></li>\n<li><a href="#blockquotes">Blockquotes</a></li>\n<li><a href="#horizontal-rule">Horizontal Rule</a></li>\n<li><a href="#task-lists">Task Lists</a></li>\n<li><a href="#mention">Mention</a></li>\n</ol>\n<hr>\n<h2 dir="auto">Headers</h2>\n<h1 dir="auto">H1</h1>\n<h2 dir="auto">H2</h2>\n<h3 dir="auto">H3</h3>\n<h4 dir="auto">H4</h4>\n<h5 dir="auto">H5</h5>\n<h6 dir="auto">H6</h6>\n<hr>\n<h2 dir="auto">Emphasis</h2>\n<p dir="auto"><em>italic</em> or <em>italic</em></p>\n<p dir="auto"><strong>bold</strong> or <strong>bold</strong></p>\n<p dir="auto"><strong><em>bold and italic</em></strong></p>\n<p dir="auto"><del>Strikethrough</del></p>\n<hr>\n<h2 dir="auto">Lists</h2>\n<h3 dir="auto">Unordered List</h3>\n<ul dir="auto">\n<li>Item 1</li>\n<li>Item 2\n<ul dir="auto">\n<li>Subitem 1</li>\n<li>Subitem 2</li>\n</ul>\n</li>\n<li>Item 3</li>\n</ul>\n<h3 dir="auto">Ordered List</h3>\n<ol dir="auto">\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ol>\n<hr>\n<h2 dir="auto">Links</h2>\n<p dir="auto"><a href="https://github.com">GitHub</a></p>\n<p dir="auto"><a href="https://github.com" title="GitHub Homepage">GitHub with Title</a></p>\n<hr>\n<h2 dir="auto">Images</h2>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/ac28190b3bdb446d46b2760854ecec42927bd2ae802d0729c6b0e72449b56082/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f6c6f676f735f706167652f4769744875622d4d61726b2e706e67"><img src="https://camo.githubusercontent.com/ac28190b3bdb446d46b2760854ecec42927bd2ae802d0729c6b0e72449b56082/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f6c6f676f735f706167652f4769744875622d4d61726b2e706e67" alt="GitHub Logo" data-canonical-src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style="max-width: 100%;"></a></p>\n<hr>\n<h2 dir="auto">Code Blocks</h2>\n<div class="highlight highlight-source-python notranslate position-relative overflow-auto" dir="auto" data-snippet-clipboard-copy-content="def hello_world():\n    print(&quot;Hello, world!&quot;)"><pre class="notranslate"><span class="pl-k">def</span> <span class="pl-en">hello_world</span>():\n    <span class="pl-en">print</span>(<span class="pl-s">"Hello, world!"</span>)</pre></div>\n<p dir="auto">Inline <code class="notranslate">code</code> example.</p>\n<hr>\n<h2 dir="auto">Tables</h2>\n<table role="table">\n<thead>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Cell 1</td>\n<td>Cell 2</td>\n</tr>\n<tr>\n<td>Cell 3</td>\n<td>Cell 4</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<h2 dir="auto">Blockquotes</h2>\n<blockquote>\n<p dir="auto">This is a blockquote.</p>\n</blockquote>\n<hr>\n<h2 dir="auto">Horizontal Rule</h2>\n<hr>\n<h2 dir="auto">Task Lists</h2>\n<ul class="contains-task-list">\n<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox" checked=""> Completed task</li>\n<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Incomplete task</li>\n</ul>\n<hr>\n<h2 dir="auto">Mention</h2>\n<p dir="auto"><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dsfx3d/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dsfx3d">@dsfx3d</a></p>\n<hr>\n<p dir="auto"><a href="mailto:dsfx3d@gmail.com">dsfx3d@gmail.com</a><br>\n<a href="mailto:yash.singh@yougov.com">yash.singh@yougov.com</a></p>',
      },
    },
  },
};
