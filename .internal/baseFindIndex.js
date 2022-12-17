// @wzm 2022-12-17
/**
 * The base implementation of `findIndex` and `findLastIndex`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex

/*
function compare(v1, v2) {
	return Number.isNaN(v1) ? Number.isNaN(v2) : v1 === v2
}

function findIndex(arr, value, fromIndex = 0, fromRight = false) {
	let start = fromIndex + (fromRight ? 1 : -1)
	while (fromRight ? start-- : ++start < arr.length) {
		if (compare(arr[start], value)) return start
	}
	return -1
}
*/
