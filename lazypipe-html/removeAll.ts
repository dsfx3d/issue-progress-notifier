import {JSDOM} from "jsdom";

export const removeAll = (selector: string) => (html: string) => {
  const dom = new JSDOM(html);
  // eslint-disable-next-line unicorn/no-array-for-each
  dom.window.document.querySelectorAll(selector)?.forEach(tag => tag.remove());
  return dom.serialize();
};
