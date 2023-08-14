import {JSDOM} from "jsdom";

export const removeAll = (selector: string) => (html: string) => {
  const dom = new JSDOM(html);
  dom.window.document.querySelectorAll(selector)?.forEach(tag => tag.remove());
  return dom.serialize();
};
