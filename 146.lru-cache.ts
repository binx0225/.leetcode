/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */
class LRUDNode {
   key: number;
   value: number;
   prev: LRUDNode | null;
   next: LRUDNode | null;

   constructor(key?: number, value?: number, prev?: LRUDNode, next?: LRUDNode) {
      this.key = key ?? 0;
      this.value = value ?? 0;
      this.prev = prev ?? null;
      this.next = next ?? null;
   }
}

// @lc code=start
class LRUCache {
   capacity: number;
   cache: Map<number, LRUDNode>;
   storage: LRUDNode[];
   leastRecent: LRUDNode;
   mostRecent: LRUDNode;

   constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = new Map<number, LRUDNode>();
      this.storage = Array<LRUDNode>(capacity);

      this.leastRecent = new LRUDNode(0, 0);
      this.mostRecent = new LRUDNode(0, 0);
      this.leastRecent.next = this.mostRecent;
      this.mostRecent.prev = this.leastRecent;
   }

   remove(node: LRUDNode) {

   }

   insert(node: LRUDNode) {
      
   }

   get(key: number): number {
      if (this.cache.has(key)) {
         return this.cache.get(key)!.value;
      } else {
         return -1;
      }
   }

   put(key: number, value: number): void {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
