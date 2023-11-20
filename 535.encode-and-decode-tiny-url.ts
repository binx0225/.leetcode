/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
const hashMap = new Map<string, string>();
let id = 0;
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
   const tinyurl = 'http://tinyurl.com/' + id;
	hashMap.set(tinyurl, longUrl);
   id++;
   return tinyurl;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return hashMap.get(shortUrl) ?? '';
};


/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

