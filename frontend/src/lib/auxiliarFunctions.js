/**
 * @brief Suport functions
 * @author Andrécio Costa
 * @date 15/04/2020
 * @update 16/04/2020
 */

export const chunk = (arr, amount, result = []) => {
  let maimed = [...arr]
  result.push(maimed.splice(arr, amount))

  return (maimed.length > 0) ? chunk(maimed, amount, result) : result
}

export const upper = (str) => str.replace(str.charAt(0), str.charAt(0).toUpperCase())

export const alphaSort = (arr) => [...arr].sort((a, b) => a.name > b.name ? 1 : -1)
