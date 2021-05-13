import axios from 'axios'

/**
 * A dataAdapter function is for tidy up the response from axios
 * @param {Object} axiosResponse
 * @return {Object} Clean Response object
 */

const dataAdapter = axiosResponse => {
  const response = axiosResponse.response || axiosResponse
  return {
    status: response.status,
    body: response.data
  }
}

/**
 * A get function
 * @param {String} url - Backend Url
 * @param {Function} success - callback function success request
 * @param {Function} fail - callback function fail request
 * @return {void} Nothing
 */
const get = (url, success, fail) => {
  axios.get(url)
    .then(response => success(dataAdapter(response)))
    .catch(response => {
      fail(dataAdapter(response))
    })
}

/**
 * A post function
 * @param {String} url - Backend Url
 * @param {Function} success - callback function success request
 * @param {Function} fail - callback function fail request
 * @param {Object} data - request data or request body
 * @return {void} Nothing
 */
const post = (url, success, fail, data) => {
  axios.post(url, data)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

/**
 * A put function
 * @param {String} url - Backend Url
 * @param {Function} success - callback function success request
 * @param {Function} fail - callback function fail request
 * @param {Object} data - request data or request body
 * @return {void} Nothing
 */
const put = (url, success, fail, data) => {
  axios.put(url, data)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

/**
 * A del function
 * @param {String} url - Backend Url
 * @param {Function} success - callback function success request
 * @param {Function} fail - callback function fail request
 * @return {void} Nothing
 */
const del = (url, success, fail) => {
  axios.delete(url)
    .then(response => success(dataAdapter(response)))
    .catch(response => fail(dataAdapter(response)))
}

export {
  get,
  post,
  put,
  del
}
