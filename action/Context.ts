import {Context as Base} from "@actions/github/lib/context";

export class Context extends Base {
  readonly eventAction = `${this.eventName} ${this.action}`;
  readonly githubToken = process.env.GITHUB_TOKEN as string;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}
