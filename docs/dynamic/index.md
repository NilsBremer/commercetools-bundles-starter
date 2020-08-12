# Dynamic Bundles

## Overview

Dynamic bundles allow for more complex bundling scenarios. Dynamic bundles
specify a group of products where the user can select one product variant.
Common use-cases include mix-&-match offers, where a user can select six craft
beers to build a six-pack or build an entire outfit choosing a shirt, jacket,
pants, and tie. Another common use-case is composite products, where the user
can configure the final product, for example building a computer by choosing a
CPU, GPU, RAM, and HDD.

Where a [static bundle](../static/index.md) points to specific SKUs, a dynamic
bundle points to specific categories and stores business rules around each
category. Pricing for the dynamic bundle can be a fixed amount or change based
on the bundle selections.

Dynamic bundles require a custom UI for the customer to make their selections
and additional code when adding to the cart and checking out. The system
presented handles some common use-cases, however companies often have unique
business rules that need to be considered. To accommodate these rules, the code
can be modified to meet the needs of the store.

Dynamic bundles are achieved by creating a new product with a specific
[type](https://docs.commercetools.com/http-api-projects-productTypes) that
references all the product groups and business rules within the bundle.

The Merchant Center
[custom application](https://docs.commercetools.com/custom-applications/) in
this solution assists merchandisers in creating and managing dynamic bundles.

## Technology

- [ReactJS](https://reactjs.org/)
- [Apollo](https://www.apollographql.com/docs/react/) &
  [GraphQL](https://graphql.org/learn/)
- [Merchant Center Application Kit](https://docs.commercetools.com/custom-applications/)
- [UI Kit](https://uikit.commercetools.com/?path=/story/introduction--getting-started) -
  Merchant Center component library
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started) - Package manager
- [Jest](https://jestjs.io/docs/en/getting-started) - Test runner
- [Enzyme](https://enzymejs.github.io/enzyme/) - React testing utility
- [Prettier](https://prettier.io/docs/en/index.html) - Code formatter
- [ESLint](https://eslint.org/docs/user-guide/getting-started) - JS, CSS, and
  GraphQL linter

## Configuration

A
[terraform script](https://github.com/commercetools/platform-extension-gallery/tree/master/packages/platform-extension-dynamic-bundles#terraform)
initializes the commercetools project for using dynamic bundles. Prior to using
dynamic bundles, this terraform script must be executed against the
commercetools project and will deploy:

- [Dynamic Bundle Product Type](https://github.com/commercetools/platform-extension-gallery/blob/master/packages/platform-extension-dynamic-bundles/resourceDefinitions/productTypes/dynamic-bundle-parent.json)
  – For creating new bundles.
- [Nested Product Type](https://github.com/commercetools/platform-extension-gallery/blob/master/packages/platform-extension-dynamic-bundles/resourceDefinitions/productTypes/dynamic-bundle-child-category.json)
  – For managing 1...n category references from a dynamic bundle and
  configuration data.

## Installation

Simply run `yarn` from the repository root to install the application's
dependencies.

The application has a dependency on the private package
`@commercetools-us-ps/mc-app-core`, which requires an
[npm auth token](https://docs.npmjs.com/about-authentication-tokens). To acquire
an auth token, request access to the `@commercetools-us-ps` scope from the US
Professional Services team.
[Create](https://docs.npmjs.com/creating-and-viewing-authentication-tokens) the
auth token then run the following commands to configure npm. This will allow the
installation of the private package.

```shell
export NPM_TOKEN=xxxx-xxxx-xxxx-xxxx
npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"
```