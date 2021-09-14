# DID Context _(did-context)_

[![NPM Version](https://img.shields.io/npm/v/did-context.svg?style=flat-square)](https://npm.im/did-context)
<!--[![Build Status](https://travis-ci.org/digitalbazaar/did-context.png?branch=master)](https://travis-ci.org/digitalbazaar/did-context)-->

> A [DID][did-spec] (Decentralized Identifier) context library for JavaScript

This project packages the DID Context from the [DID specification][did-spec]
for use with [Node.js][Node.js] and web apps.

## Table of Contents

- [Security](#security)
- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Security

TBD

## Background

See also (related specs):

* [Decentralized Identifiers (DIDs) - Data Model and Syntaxes][did-spec]
* [Decentralized Identifier Resolution](https://w3c-ccg.github.io/did-resolution/)

## Install

Requires [Node.js][] 8.3+

To install via [NPM][]:

```
npm install did-context
```

## Usage

```js
import didContext from 'did-context';
// or
const didContext = require('did-context');

// use URL in a JSON-LD context
const obj = {
  "@context": [
    didContext.CONTEXT_URL_V1,
    // ...
  ],
  // ...
};

// get context data for a specific context
const data = didContext.CONTEXT;
// ...
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports two properties:
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `DID_CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Contribute

Code and packaging development is at the [did-context][] project. The contexts
themselves are developed in the [did-spec][] project.

Contexts in this package are updated manually from the [did-spec][] contexts.
Please file an issue if this package is not synced with [did-spec][] changes in
a timely manner.

Small note: If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- Code: BSD 3-Clause © Digital Bazaar
- Contexts: W3C Software and Document License
- See the [LICENSE](./LICENSE.md) file for details.

[did-context]: https://github.com/digitalbazaar/did-context
[did-spec]: https://www.w3.org/TR/did-core/
[NPM]: https://www.npmjs.com/
[Node.js]: https://nodejs.org/
[webpack]: https://webpack.js.org/
