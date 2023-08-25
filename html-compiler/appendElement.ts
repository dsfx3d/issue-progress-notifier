import {JSDOM} from "jsdom";
import {Reader} from "fp-ts/lib/Reader";
import {TAppendTagRequest} from "./TAppendTagRequest";
import {TStage} from "../utils/TStage";

export const appendElement: Reader<TAppendTagRequest, TStage<string>> =
  ({getParent, toElement}) =>
  async html => {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const parent = getParent(document);
    parent!.append(await toElement(document));
    return dom.serialize();
  };
