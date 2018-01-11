import { Document, Block, Value, Text } from 'slate';
import { List } from 'immutable';
import Plain from 'slate-plain-serializer';

const sep = '\n';
const CODE_LINE = 'code_line';
const CODE_BLOCK = 'code_block';

export default {
  deserialize,
  serialize: Plain.serialize,
};

function deserialize(string, syntax) {
  const coceLines = List(string.split(sep)).map(line =>
    Block.create({
      type: CODE_LINE,
      nodes: [ Text.create(line) ],
    })
  );
  const codeBlock = Block.create({
    data: { syntax },
    type: CODE_BLOCK,
    nodes: coceLines,
  });
  const document = Document.create({ nodes: [ codeBlock ] });
  const value = Value.create({ document });
  return value;
}
