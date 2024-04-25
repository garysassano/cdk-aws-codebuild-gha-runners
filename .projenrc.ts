import { awscdk, javascript } from "projen";
import { IndentStyle } from "projen/lib/javascript/biome/biome-config";

const project = new awscdk.AwsCdkTypeScriptApp({
  name: "cdk-aws-codebuild-gha-runners",

  // Base
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  projenrcTs: true,

  // Toolchain
  biome: true,
  biomeOptions: {
    biomeConfig: {
      formatter: {
        enabled: true,
        indentStyle: IndentStyle.SPACE,
        indentWidth: 2,
        lineWidth: 100,
      },
      linter: {
        enabled: true,
        rules: {
          recommended: true,
          suspicious: {
            noShadowRestrictedNames: "off",
          },
        },
      },
    },
  },
  cdkVersion: "2.210.0",
  minNodeVersion: "22.18.0",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "10",

  // Deps
  devDeps: ["zod"],
});

project.synth();
