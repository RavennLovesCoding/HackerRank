//Day 1 pt 2 challenge problem:

/*Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Sample Input: 4
Sample Output: 24
*/

//My Solution
/*
 * Create the function factorial here
 */

function factorial(n) {
    if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}