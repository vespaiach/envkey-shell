# envkey-shell

The [envkey-node](https://github.com/envkey/envkey-node) library doesn't support a shell command, so when using `envkey` with `next.js`, we have to import `envkey` library in a custom server file.

This script is about creating a command shell for `envkey` library and allowing to use that command in npm script.

## Usage

Install with npm or yarn
```
npm install envkey-shell --save
yarn install envkey-shell -S
```

Create a `.env` file
```
ENVKEY=Gssszx5zGsdEVS4osdf112-779ifSm9ki9Yb8123
```

Sample using with next.js.
```
package.json
{
    "script": {
        "start": "envkey-shell next start"
    }
}
```

