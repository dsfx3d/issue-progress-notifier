// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export function toIssueHead() {
  return (
    <div class="flex flex-col gap-2 font-sans border-b-2 pb-4">
      <h1 class="text-3xl font-medium">
        this is the title
        <span class="text-gray-500 text-2xl font-light">#23</span>
      </h1>
      <div class="flex gap-2 content-center items-center">
        <span class="badge badge-success py-4 font-semibold">Open</span>
        <span class="text-sm">
          <b class="font-medium">dsfx3d</b> opened this issue 2 days ago · 1
          comment
        </span>
      </div>
    </div>
  );
}
