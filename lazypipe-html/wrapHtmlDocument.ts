import {TStage} from "@issue-notifier/lazypipe";

export const wrapHtmlDocument: TStage<string> = async input => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>${input}</body>
  </html>
  `;
};
