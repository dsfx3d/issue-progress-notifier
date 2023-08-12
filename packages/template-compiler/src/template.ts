import {TTemplate} from "./TTemplate";
import {compile} from "ejs";

export const template: TTemplate = compile(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style><%-locals.css%></style>
</head>
<body>
  <%-locals.body%>
</body>
</html>`);
