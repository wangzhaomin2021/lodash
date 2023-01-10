// @wzm 2023-1-10
import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
/*
function chunk(arr, size = 1) {
	const len = Math.ceil(arr.length / size)
	const array = new Array(len)
	for (let i = 0; i < len; i++) {
		array[i] = []
		for (let j = 0; j < size; j++) {
			array[i][j] = arr[i * size + j]
			if (i * size + j === arr.length - 1) break
		}
	}
	return array
}

function chunk2(arr, size = 1) {
	if (size < 1) throw new Error('size cannot less than 1')
	const res = [], _size = size
	let ck = []
	let i = 0
	while(i < arr.length) {
		if (size-- > 0) {
			ck.push(arr[i])
			i === arr.length - 1 && res.push(ck)
		} else {
			size = _size
			res.push(ck)
			i < arr.length && (ck = [arr[i]])
		}
		i++
	}
	return res
}
*/
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
