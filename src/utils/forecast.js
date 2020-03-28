const request = require('request')

const forecast = (latitude,longitude,callback) => {

    const url = 'https://api.darksky.net/forecast/af67d00dba5c2a49190b2ca5526026b7/'+latitude+','+longitude + '?si'
    // destructuring & short-hand property
    request({ url, json : true}, (error,{body} = {}) => {

        if(error){
            callback('Unable to connect to Weather Service!')
        } else if(body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '\xB0C there. There is a '+ body.currently.precipProbability*100 + '% chance of rain.' )
        }
    })

}

module.exports = forecast