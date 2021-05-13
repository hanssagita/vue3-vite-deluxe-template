import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

/**
 * Importing all of your API Mock Modules Files and concat them into 1 array
 */
import dummy from './modules/dummy'
// import otherRoutes from './modules/other-routes' | example import another module
const apiRoutes = [
  ...dummy,
  // ...otherRoutes | example concat other module into 1 array
]

/**
 * List of Axios Mock Adapter methods names
 */
const methodsMap = {
  GET: 'onGet',     // Mock any GET request
  POST: 'onPost',   // Mock any POST request
  PUT: 'onPut',     // Mock any PUT request
  DELETE: 'onAny'   // Mock onAny can be use for DELETE or PATCH request
}

/**
 * A generateQueryParams function is for turn object params to string params
 * @param {Object} queryParams - Query params object
 * @return {String} queryParamsString - query params in string
 */
const generateQueryParams = (queryParams) => {
  const queryParamsString = [];
  for (const key in queryParams) {
    if (queryParams.hasOwnProperty(key)) {
      queryParamsString.push(encodeURIComponent(key) +
        "=" + encodeURIComponent(queryParams[key]));
    }
  }
  return queryParamsString.length > 0 ?
    '?' + queryParamsString.join("&") : ''
}
/**
 * Example Input Output for this function
 * Example 1
 * Input: { itemPerPage: 10, page: 2, searchTerm: 'samsung' }
 * Output: ?itemPerPage=10&page=2&searchTerm=samsung
 * Example 2 (empty param)
 * Input: null || {} || undefined
 * Output: ''
 */

/**
 * Define the Axios Mock Adapter
 * Axios Mock Adapter also let us to delay all the response
 * Our default delay response is 0 (None), but if you want to delay it you can change it
 * It's usually used for test loading state and develop the skeleton template
 */
const delayResponse = 0                                 // In millisecond
const mock = new MockAdapter(axios, { delayResponse })

/**
 * Creating all the API mock from the apiRoutes Array that we concat earlier above
 */
const generateMock = () => {
  apiRoutes.forEach(route => {
    let queryParams = ''
    if (route.queryParams) {
      queryParams = generateQueryParams(route.queryParams)
    }
    mock[methodsMap[route.method]](
      `${route.url}${queryParams}`,
      {...route.params})
      .reply(route.code, route.response)
  })

  /**
   * To make sure API Mock created successfully on your application
   */
  console.log('success creating mock')
}


export default generateMock
