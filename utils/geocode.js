const request = require( 'request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGV5cHJhc2hhbnQiLCJhIjoiY2tpdHd1bjg5MDU2OTJxbXd4c2pxYWF3NSJ9.6j0sGJDAiPl51skW7CEarQ&limit=1';
    
    request( { url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to location services!', undefined);
        }
        else if ( response.body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        }
        else {
            callback( undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;