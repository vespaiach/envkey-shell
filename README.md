[![NPM version][npm-image]][npm-url] [![Star][star-image]][repo-url] [![Issue][issue-image]][issue-url]

[star-image]:https://img.shields.io/github/stars/vespaiach/envkey-shell?style=flat-square
[issue-image]:https://img.shields.io/github/issues/vespaiach/envkey-shell?style=flat-square
[issue-url]:https://github.com/vespaiach/envkey-shell/issues
[npm-url]:https://www.npmjs.com/package/envkey-shell
[npm-image]:https://img.shields.io/npm/v/envkey-shell?style=flat-square
[repo-url]:https://github.com/vespaiach/envkey-shell


# envkey-shell

The [envkey-node](https://github.com/envkey/envkey-node) library doesn't support a shell command, so when using `envkey` with `next.js`, we have to import `envkey` library in a custom server file.

This script is about creating a command shell for `envkey` library and allowing to use that command in npm script.

## Usage

Install with npm or yarn
```
npm install envkey-shell --save
yarn install envkey-shell -S
```

Create a `.env` file and add `ENVKEY`
```
// This is a sample key. Please use your own key.
ENVKEY=Gssszx5zGsdEVS4osdf112-779ifSm9ki9Yb8123
```

**Examples:**

Using with next.js.
```
package.json
{
    "script": {
        "start": "envkey-shell next start"
    }
}
```

Using with vue.js.
```
package.json
{
    "scripts": {
        "serve": "envkey-shell vue-cli-service serve",
    }
}
```

Using with react-scripts.
```
package.json
{
    "scripts": {
        "serve": "envkey-shell react-scripts start",
    }
}
```
