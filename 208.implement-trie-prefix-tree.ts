/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class Trie {
   root: TrieNode;
   constructor() {
      this.root = new TrieNode();
   }

   insert(word: string): void {
      let node = this.root;
      for (let char of word) {
         if (!node.children[char]) {
            node.children[char] = new TrieNode();
         }
         node = node.children[char];
      }
      node.isWord = true;
   }

   search(word: string): boolean {
      let node = this.root;
      for (let char of word) {
         if (!node.children[char]) {
            return false;
         }

         node = node.children[char];
      }
      return node.isWord;
   }

   startsWith(prefix: string): boolean {
      let node = this.root;
      for (let char of prefix) {
         if (!node.children[char]) {
            return false;
         }

         node = node.children[char];
      }
      return true;
   }
}

class TrieNode {
    children: { [key: string]: TrieNode } = {};
    isWord: boolean = false;
 }
 

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
