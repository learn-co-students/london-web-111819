const baseUrl = 'http://localhost:3001'

const stocksUrl = baseUrl + '/stocks'

const get = url => fetch(url).then(resp => resp.json())

const getStocks = () => get(stocksUrl)

export default { getStocks }
