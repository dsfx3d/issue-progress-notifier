import {Reader} from "fp-ts/lib/Reader";

export type TAppendTagRequest = {
  getParent: Reader<Document, Element | null>;
  toElement: Reader<Document, Promise<Element>>;
};
