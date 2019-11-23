# TypeScript Project Boilerplate

This project is setup with:

- TypeScript
- Jest
- ESLint for syntax checking
- Prettier for code formatting

## Contributing

### What the Heck?
You may have some questions.  Here are the answers.  There may be better answers by the time you read this - so open a pull request 😜!

-

### Linting and Code Formatting
[TSLint is deprecated](https://github.com/palantir/tslint/issues/4534), with the [linting rules](.eslintrc.json) getting moved to ESLint.

**Linting is not code formatting!!**

ESLint is configured ONLY for syntax and problem checking - NOT code formatting!
[ESLint formatting rules are disabled](https://prettier.io/docs/en/integrating-with-linters.html#eslint), and all code [formatting rules](.prettierrc) run through Prettier.

### Unit Tests

#### Writing

##### File naming and placement
Unit tests are written using Jest.  Create the test files next to the production files.  eg:

```
/src/greeter.ts
/src/greeter.test.ts
```

The build will ignore all `*.test.*` files.

##### Jest API
Jest has many aliases to be compatibile with Jasmine's API.  We can break from that here:

| Use Jest Method | Instead of |
|----|----|
| `test` | `it` |
| `jest.fn()` | `createSpy`, et al. |

##### Organizing tests
[To enhance understandability](https://elixirforum.com/t/how-to-describe-many-contexts-in-exunit-without-a-hierarchy/1551/3), avoid nested `describe` blocks when possible.  It is common to wrap all `test`s in a test suite within a single `describe` block to provide some context.  Jest tests are written as ES6 modules, where each file represents a test suite.  The test suite is often context enough, so you can just have a bunch of `test` blocks without the need for _any_ `describe` block.

If you need to group tests together for conditional testing (eg: `describe('when the user is logged in', ...)` and `describe('when the user is not authenticated', ...`)), go for it.  You can have two separate, unnested `describe` blocks in your suite to do that. 👍

If you find that this guideline is too limiting while you are writing tests, then your module is likely doing too much, or coupled too closely to other things.  Break it up.

#### Running
```bash
# single-run
npm run test

# autowatch
npm run test -- --watch
```
