# @x12i/memorix-similarity usage example

Generic similarity indexing and query primitives for Memorix foundation.

This consuming application demonstrates **route a similarity query through a registered local backend** using the published npm package, pinned to `1.32.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Index supported record content for similarity lookup.
- Query similar items through the foundation's generic primitives.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-similarity)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
