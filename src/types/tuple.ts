/**
 * tuple 类型
 *   - 固定长度
 *   - 特定位置固定类型
 *
 * 2.6版本后不允许越界
 */

let tup: [string, number] = ["Jon Snow", 343];

// Error: 类型不能变
// tup[1] = "2";
