import {type CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://docs.github.com/public/schema.docs.graphql",
  documents: ["./**/*.graphql"],
  generates: {
    "./graphql/lib/": {
      preset: "client",
    },
  },
};

export default config;
