# EEXAR Developer Test

## Test Details
- 50x50 Fibonacci sequence game
- Cells are cleared if 5 consecutive Fibonacci numbers exist (aka. 1, 1, 2, 3, 5):
    - From left to right
    - From right to left
    - From top to bottom
    - From bottom to top
- Written in Vue3 + TS + Vite
- Tested using Jest
- Styling by TailwindCSS
- deployment using Github Actions

[Online version on Github Pages](https://swawrzyn.github.io/eexar-test/)

## Instructions

0. Requirements
- Node.js v16.x.x
- Yarn

1. Clone repo and enter directory
```
$ git clone git@github.com:swawrzyn/eexar-test.git
$ cd eexar-test
```

2. Download node modules
```
$ yarn
```

3. Run dev server
```
$ yarn dev
```

4. (Optional) Run Tests
```
$ yarn test
```

Once the server has started you can view it at http://localhost:3000/eexar-test/.