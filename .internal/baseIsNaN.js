// @wzm 2022-12-17 
/**  NaN js中唯一一个不等于自身的
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN
