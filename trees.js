const prompt = require('prompt-sync')({ sigint: true });

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild = (node, parent) => {
    let nodes = [this]; // to put the root node in our array
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      if (currentNode.data === parent && currentNode.children.length < 2) {
        currentNode.children.push(node);
        console.log(`added ${node.data} to ${parent}`);
        return;
      }
      if (currentNode.data === parent && currentNode.children.length === 2) {
        console.log('parent has 2 children');
        return;
      }
      nodes = [...nodes, ...currentNode.children];
    }
    console.log('parent does not exist');
  };
}

const root = new TreeNode('family');
arr = [
  'jack family',
  'jill family',
  'apple jack family',
  'ham jack family',
  'lemon jack family',
  'sour apple jack family',
  'simple simon family',
  'done',
];

arr.forEach((a) => {
  if (a === 'done') {
    console.log(a);
    return;
  }
  let ar = a.split(' ');
  const childOne = new TreeNode(ar[0]);
  root.addChild(childOne, ar[1]);
});
