# Contributing

Contributions are welcome, and this project is a great starting point for anyone looking to get involved in open-source development. Whether you’re new to contributing or a seasoned developer, your input is valued!

## Development

### Fork this repository and commit your changes

To get started with contributing, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine

```bash
git clone https://github.com/your-username/cc-next.git
```

3. Navigate to project directory

```bash
cd cc-next
```

4. Install dependencies

```bash
pnpm install
```

5. Create a new branch for your feature:

```bash
git checkout -b feat/my-new-feature
```

6. Make your changes and commit them:

```bash
git commit -m "feat: add some feature"
```

7. Push the branch to your fork:

```bash
git push origin feat/my-new-feature
```

8. Open a pull request to the main repository.

## Commit Convention

Before you create a Pull Request, please ensure that your commits adhere to the commit conventions used in this repository.

When you create a commit, follow the convention `category: message` in your commit message while using one of the following categories:

#### Category:

- `feat`: changes that introduce completely new code or new features
- `fix`: changes that fix a bug
- `docs`: documentation changes only
- `build`: changes that affect the build system or external dependencies
- `ci`: changes related to the setup and configuration of continuous integration systems
- `test`: adding missing tests or correcting existing tests
- `refactor`: any code related change that is not a fix nor a feature
- `chore`: changes to the repository that do not fit into any of the above categories

#### Message:

The message contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Example:
```
feat: add TypeScript support to the project
```

Learn more about [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). If you are interested in the details.

## Testing

Before committing your changes, please make sure to run the test to ensure that everything is working correctly. You can run the test using the following command:

```bash
pnpm run test
```