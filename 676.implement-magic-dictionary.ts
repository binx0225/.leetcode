/*
 * @lc app=leetcode id=676 lang=typescript
 *
 * [676] Implement Magic Dictionary
 */

// @lc code=start
class MagicDictionary {
    private patterns: Map<string, string[]>;

    constructor() {
        this.patterns = new Map();
    }

    buildDict(dictionary: string[]): void {
        for (let word of dictionary) {
            for (let i = 0; i < word.length; i++) {
                let pattern = word.substring(0, i) + '.' + word.substring(i + 1);
                if (!this.patterns.has(pattern)) {
                    this.patterns.set(pattern, []);
                }
                this.patterns.get(pattern)!.push(word);
            }
        }
    }

    search(searchWord: string): boolean {
        for (let i = 0; i < searchWord.length; i++) {
            let pattern = searchWord.substring(0, i) + '.' + searchWord.substring(i + 1);
            if (this.patterns.has(pattern)) {
                for (let word of this.patterns.get(pattern)!) {
                    if (word !== searchWord) return true;
                }
            }
        }
        return false;
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

