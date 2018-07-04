# @turretcss/react

[![unstable](http://hughsk.github.io/stability-badges/dist/unstable.svg)](http://github.com/hughsk/stability-badges)

React components to use with [turretcss](https://turretcss.com/)

## Stability

This package is currently unstable and is likely to evolve.

## Install from npm

```sh
npm install @turretcss/react
```
or

```sh
yarn add @turretcss/react
```

## Usage

```js
import { Button } from '@turretcss/react'

<Button label="Click me" onClick={() => console.log('clicked!')} />
```

## Components

- Button
- ButtonLink
- ButtonGroup
- Checkbox
- CheckboxGroup
- Switch
- Radio
- RadioGroup
- RadioButtonGroup
- Select

## Options and Examples

Clone the repo and launch the storybook or look at the tests

```sh
git clone https://github.com/turretcss/react turretcss-react
cd turretcss-react
yarn && yarn storybook
```
