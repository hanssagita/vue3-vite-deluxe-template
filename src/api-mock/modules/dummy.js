export default [
  {
    url: '/api/test',         // Mock Url
    method: 'GET',           // Mock method GET|POST|PUT|Etc
    code: 200,                // Mock response code 200|500|404
    queryParams: {            // Mock query params in object
    },                        // You can add query params more than one
    params: {                 // Mock request params for mock in object
    },                        // You can add more params
    response: {               // API Mock Response
      data: 'Data Get'            // Response value it can be string, object, array or etc
    }                         // You can add more value not only data
  }
]
