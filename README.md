# cdk-aws-codebuild-gha-runners

CDK app that, given an existing GitHub repository, attaches a repository webhook that triggers [CodeBuild-hosted GitHub Actions runners](https://docs.aws.amazon.com/codebuild/latest/userguide/action-runner.html) when workflow jobs are queued.

### Related Apps

- [cdktf-aws-codebuild-gha-runners](https://github.com/garysassano/cdktf-aws-codebuild-gha-runners) - Built with CDKTF instead of AWS CDK.
- [cdktf-aws-codebuild-gha-runners-org](https://github.com/garysassano/cdktf-aws-codebuild-gha-runners-org) - Built with CDKTF instead of AWS CDK; uses a GitHub organization webhook instead of repository webhook.

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli_auth) in your local environment.
  - Must have completed the [CDK bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) for the target AWS environment.
- **_GitHub:_**
  - Must have created a GitHub repository in your personal account.
  - Must have set the `GITHUB_TOKEN`, `GITHUB_OWNER` and `GITHUB_REPO` variables in your local environment.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Usage

1. Grab the `<GHA_RUNNER_LABEL>` from the deployment outputs:

   ```sh
   Outputs:
   GhaRunnerLabel = <GHA_RUNNER_LABEL>
   ```

2. Create a new GitHub Actions workflow and specify the runner:

   ```yaml
   runs-on: <GHA_RUNNER_LABEL>
   ```

3. Commit and push your workflow file to the repository.

4. Your workflow will be enqueued and run on an ephemeral EC2 instance managed by AWS CodeBuild.

## Cleanup

```sh
npx projen destroy
```

## Architecture Diagram

![Architecture Diagram](./src/assets/arch-diagram.svg)
