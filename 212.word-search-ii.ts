/*
 * @lc app=leetcode id=212 lang=typescript
 *
 * [212] Word Search II
 */

// @lc code=start
/*
1. Build a Trie: Construct a trie from the list of words. This trie will be used to check if a path on the board can potentially form a word.

2. Backtracking: Use a backtracking approach to explore the board. Starting from each cell, try to form words using adjacent cells (horizontally or vertically).

3. Check Against the Trie: As you form strings by traversing the board, use the trie to check:

If the string is a word in the list, add it to the result.
If the string is not a prefix of any word, stop exploring that path.
4. Avoid Revisiting: To ensure the same cell is not used more than once in a word, mark cells as visited during exploration and unmark them when backtracking.

*/

class TrieNode {
   children: Map<string, TrieNode>;
   word: string | null;

   constructor() {
      this.children = new Map();
      this.word = null;
   }
}

function buildTrie(words: string[]): TrieNode {
   const root = new TrieNode();
   for (const word of words) {
      let node = root;
      for (const char of word) {
         if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
         }
         node = node.children.get(char)!;
      }
      node.word = word; // Store words at the end node
   }
   return root;
}

function findWords(board: string[][], words: string[]): string[] {
   const root = buildTrie(words);
   const result: string[] = [];

   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
         backtrack(board, i, j, root, result);
      }
   }

   return result;
}

function backtrack(
   board: string[][],
   i: number,
   j: number,
   node: TrieNode,
   result: string[]
) {
   if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
   const char = board[i][j];

   if (char === "#" || !node.children.has(char)) return; // '#' is visited

   const nextNode = node.children.get(char)!;
   if (nextNode.word) {
      // Found a word
      result.push(nextNode.word);
      nextNode.word = null; // Avoid duplicate entries
   }

   board[i][j] = "#"; // Mark as visited
   backtrack(board, i + 1, j, nextNode, result);
   backtrack(board, i - 1, j, nextNode, result);
   backtrack(board, i, j + 1, nextNode, result);
   backtrack(board, i, j - 1, nextNode, result);
   board[i][j] = char; // Revert state
}

// @lc code=end
