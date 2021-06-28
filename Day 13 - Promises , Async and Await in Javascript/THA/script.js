
//------------------------------------------------------------------------------

const ABSTRACT_API_KEY = "af853ce0de7e475c9149954ac9474acf";

const getGeolocationData = async (API_KEY) => {

    let FETCH_URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`;
    
    const JSONResponse = await fetch(FETCH_URL)
                         .then((data)=> {
                             return data;
                         }).catch((err)=> {
                             return err;
                         });
    let data = await JSONResponse.json();
    return data;
};

(async () => {
    var GeoLocationData = await getGeolocationData(ABSTRACT_API_KEY);
    console.log(GeoLocationData);
    let IPContainer = document.getElementsByClassName("ip-address-container")[0];
    IPContainer.innerHTML = JSON.stringify(GeoLocationData);

})();



