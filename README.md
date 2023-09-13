# pixelone-base

> React based UI components library

[![NPM](https://img.shields.io/npm/v/pixel-bases.svg)](https://www.npmjs.com/package/pixel-bases) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pixel-base
```

## Usage

DEMO: https://pixelone-corp.github.io/pixel-base/

<!-- run storybook in local using node version upper then 16 the  run these commands
macOS & linux: export NODE_OPTIONS="--openssl-legacy-provider"
window: $env:NODE_OPTIONS = "--openssl-legacy-provider"
 -->

```tsx
import React, { Component } from 'react'

import MyComponent from 'pixel-base'
import 'pixel-base/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}

// Note: If you are using TypeScript, make sure to add a declaration for the 'pixel-base' module in your project's type declarations
```

## License

MIT ©
