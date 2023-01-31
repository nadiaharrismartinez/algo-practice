// OPTIMIZED APPROACH

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
EDGE CASES:
- negative integers
- unbalanced tree
- incomplete tree

IDEAS:
- Depth First Search
- Breadth First Search

BRUTE FORCE APPROACH:
- DFS
- Calculate the length
- if Length > last length, replace length
- Return length
 */

var maxDepth = function (root) {
  let length = 0;
  if (!root) return 0;

  length++;
  return (length += Math.max(maxDepth(root.left), maxDepth(root.right)));
};
