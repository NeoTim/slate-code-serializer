'use strict';

const Code = require('../lib').default;

const code = `
{
  code: true, // Business Code
  data: {
    name: "Hackers and Painters", // Book name
    author: "Paul Graham", // Book author
    code: 100, // Inner Code
  },
  msg: "msg", // API Message
}
`;

const value = Code.deserialize(code, 'javascript');
const str = Code.serialize(value);

// console.log(JSON.stringify(value.toJSON(), null, 2));
console.log(str);
