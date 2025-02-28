---
title: TypeScript Config option
---

The `tsconfig` option allows you to define which `tsconfig` JSON file to use. An inline [compiler options][] object can also be specified instead of a file path.

By default `ts-jest` will try to find a `tsconfig.json` in your project. If it cannot find one, it will use the default TypeScript [compiler options][]; except, `ES2015` is used as `target` instead of `ES5`.

If you need to use defaults and force `ts-jest` to use the defaults even if there is a `tsconfig.json` in your project, you can set this option to `false`.

### Examples

#### Path to a `tsconfig` file

The path should be relative to the current working directory where you start Jest from. You can also use `<rootDir>` in the path to start from the project root dir.

```js tab
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
}
```

```ts tab
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
}

export default jestConfig
```

```JSON tab
{
  // [...]
  "jest": {
    "transform": {
      "<regex_match_files>": [
        "ts-jest",
        {
          "tsconfig": "tsconfig.test.json"
        }
      ]
    }
  }
}
```

#### Inline compiler options

Refer to the TypeScript [compiler options][] for reference.
It's basically the same object you'd put in your `tsconfig.json`'s `compilerOptions`.

```js tab
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: {
          importHelpers: true,
        },
      },
    ],
  },
}
```

```ts tab
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: {
          importHelpers: true,
        },
      },
    ],
  },
}

export default jestConfig
```

```JSON tab
{
  // [...]
  "jest": {
    "transform": {
      "<regex_match_files>": [
        "ts-jest",
        {
          "tsconfig": {
            "importHelpers": true
          }
        }
      ]
    }
  }
}
```

#### Disable auto-lookup

By default `ts-jest` will try to find a `tsconfig.json` in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting `tsconfig` to `false`.

```js tab
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: false,
      },
    ],
  },
}
```

```ts tab
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        tsconfig: false,
      },
    ],
  },
}

export default jestConfig
```

```JSON tab
{
  // [...]
  "jest": {
    "transform": {
      "<regex_match_files>": [
        "ts-jest",
        {
          "tsconfig": {
            "tsconfig": false
          }
        }
      ]
    }
  }
}
```

[compiler options]: https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options
