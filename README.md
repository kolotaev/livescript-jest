# livescript-jest

Simple LiveScript Preprocessor for Jest

# Usage:

Install with npm or yarn:

```bash
npm i livescript-jest

# or

yarn add livescript-jest
```


In your `package.json` or `jest.config.json` specify ".ls" files preprocessor:

```json
  "jest" :{
    "transform": {
      "^.+\\.ls$": "livescript-jest",
    },
    "moduleFileExtensions": [
      "ls",
    ]
  }
```
