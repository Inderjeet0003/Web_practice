// const txtData = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`

// const data = JSON.parse(txtData)

// console.log(data)
// console.log(data.ticker.price)
// console.log('hello')


// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(data => {
//         console.log(data)
//         return data.json()
//     })
//     .then(pd => {
//         console.log(pd)
//         console.log(pd.ticker.price)
//     })
//     .catch(e => {
//         console.log('error occured')
//         console.log(e)
//     })

console.log('using axios')

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(fD => {
        console.log(fD)
        console.log(fd.data.ticker.price)
    })
    .catch(() => {
        console.log("err occured")
    })