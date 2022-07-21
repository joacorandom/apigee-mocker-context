# apigee-mocker-context
Node utility for unit testing JS files created on Apigee.

Used for unit testing Apigee JS files.

Usage:
```js
const { context } = require("apigee-mocker-context");

context.import({ "request.content": "test"});

const clonedContext = context.export();
```

# Usage in Apigee
Use the following structure in your JS files so you will be able easily import them in Node.
It's important to return context


```js
const thisModule = env => {
    const context = env.context
    //TODO: Insert your code
    return context;
}
if (typeof exports !== 'undefined') exports.thisModule = thisModule;
if (typeof context !== 'undefined') thisModule({ context: context }) = thisModule;
```
