/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

// @lc code=start
class MyHashSet {
    private bucket: boolean[];

    constructor() {
        this.bucket = [];
    }

    add(key: number): void {
        this.bucket[key] = true;
    }

    remove(key: number): void {
        this.bucket[key] = false;
    }

    contains(key: number): boolean {
        if (this.bucket[key] === true) return true;

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

