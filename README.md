# livescript-jest

Simple LiveScript Preprocessor for Jest

[![npm version](https://badge.fury.io/js/livescript-jest.svg)](https://badge.fury.io/js/livescript-jest)
[![Build Status](https://travis-ci.org/kolotaev/livescript-jest.svg?branch=master)](https://travis-ci.org/kolotaev/livescript-jest)

----

## Installation:

Install with npm or yarn:

```bash
npm i livescript-jest

# or

yarn add livescript-jest
```

## Usage:

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
