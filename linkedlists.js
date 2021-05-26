const prompt = require('prompt-sync')({ sigint: true });
class Node {
  constructor(year, highlight, nextNode = null) {
    this.year = year;
    this.highlight = highlight;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(year, highlight) {
    this.headNode = new Node(year, highlight);
  }

  insertBeg = (age, high) => {
    const node = new Node(age, high, this.headNode);
    this.headNode = node;
  };

  traverse = () => {
    let cur = this.head;
    while (cur) {
      console.log(`year : ${cur.year} , highlight : ${cur.highlight}`);
      cur = cur.nextNode;
    }
  };

  insertHig = (age) => {
    let cur = this.head;
    while (cur.age < age) {
      let curAge = cur.age + 1;
      if (cur.nextNode && cur.nextNode.age === curAge) {
        cur = cur.nextNode;
      } else {
        let highlight = prompt(`Enter highlights for year : ${curAge.age}`);
        let newNode = new Node(curAge, highlight, cur.nextNode);
        cur.newNode = newNode;
        cur = newNode;
      }
    }
  };
}
const ageList = new LinkedList(7, 'i was seven');
ageList.insertBeg(3, 'i started walking');
ageList.insertBeg(1, 'i was born');
let age = prompt('Enter Your Age');
ageList.insertHig(age);
