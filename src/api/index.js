import queryString from 'query-string';
/**
 *
 * @param {object} options
 * @param {number} options.currentPage
 * @param {number} options.results
 * @param {string} options.nat
 * @param {string} options.seed
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    format: 'json',
    page: 1,
    results: 5,
    seed: "fm2022-2",
    nat: "gb",
    inc:'gender,name,nat,login',
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  }
  return fetch(
    `https://randomuser.me/api/?${queryString.stringify(readyOptions)}`
  ).then((res) => res.json());
};
