/*
 * @lc app=leetcode id=166 lang=typescript
 *
 * [166] Fraction to Recurring Decimal
 */

/*
1. Handle Zero or Whole Number: If the numerator is 0, return "0". If the
 numerator is divisible by the denominator, return the quotient as a string.

2. Handle Sign: Determine the sign of the result based on the signs of the 
numerator and denominator.

3. Long Division: Perform long division for the fractional part. 
Keep track of the remainders and their positions. If a remainder repeats, 
it indicates the start of a repeating sequence.

4. Construct the Result: Build the string result with the integer part, 
the fractional part, and parentheses around the repeating part if it exists.
*/
// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {
   if (numerator === 0) return "0";

   let result = "";

   // If either one is negative (not both)
   if (numerator < 0 !== denominator < 0) result += "-";

   // Convert to Long to avoid overflow
   let num = Math.abs(numerator);
   let den = Math.abs(denominator);

   // Append the integer part
   result += Math.floor(num / den).toString();
   num %= den;

   if (num === 0) return result;

   result += ".";

   // Map to store previously seen remainders and their index in the result string
   const map = new Map<number, number>();

   while (num !== 0) {
       // If we have seen this remainder before, we have found a repeating fraction
       if (map.has(num)) {
           // Insert the '(' at the correct position and append ')'
           const start = map.get(num)!;
           result = result.substring(0, start) + "(" + result.substring(start) + ")";
           break;
       }

       // Store the remainder and its index in the result
       map.set(num, result.length);

       num *= 10;
       result += Math.floor(num / den).toString();
       num %= den;
   }

   return result;

};
// @lc code=end

