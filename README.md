# slate-code-serializer

> code text <=> slate value

Useful if highlight code blocks using [slate-prism](https://github.com/GitbookIO/slate-prism).

## Installation

```bash
$ npm i slate-code-serializer -S
```

## Usage

``` js
const Code = require('slate-code-serializer');

const text = `
  const obj = {
    a: 'a',
    b: 'b'
  };
`;

// deserialize
const value = Code.deserialize(text, 'javascript');

// serialize
const str = Code.serialize(value);

```
