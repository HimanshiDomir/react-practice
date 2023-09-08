class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode();
            }
            node = node.children[word[i]];
        }
        node.isWord = true;
    }
    suggestHelper(node, list, curr) {
        
        if (node.isWord) {
            list.push(curr);
        }
        if (!Object.keys(node.children).length) {
            return;
        }
        for (let child in node.children) {
            this.suggestHelper(node.children[child], list, curr + child)
        }
    }
    suggest(word) {
        let node = this.root;
        let curr = '';
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                return [];
            }
            node = node.children[word[i]];
            curr = curr + word[i];
        }
        let list = [];
        this.suggestHelper(node, list, curr);
        return list;
    }
}

let words = ["hello", "dog", "hell", "cat", "a", "hel", "help", "helps", "helping"];
let trie = new Trie();
words.forEach((word) => trie.insert(word));
console.log(trie.suggest("hel"));