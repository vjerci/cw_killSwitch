// based on
// https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-
// copy paste response from buildRegions to const allowedCountries
// then copy paste this file to worker

const allowedCountries = {"AX":true,"AL":true,"AD":true,"AT":true,"BE":true,"BM":true,"BA":true,"CA":true,"CN":true,"HR":true,"DK":true,"EE":true,"FO":true,"FI":true,"FR":true,"DE":true,"GI":true,"GR":true,"GL":true,"GG":true,"VA":true,"HK":true,"IS":true,"IE":true,"IM":true,"IT":true,"JP":true,"JE":true,"KP":true,"KR":true,"LV":true,"LI":true,"LT":true,"LU":true,"MO":true,"MT":true,"MC":true,"MN":true,"ME":true,"NL":true,"MK":true,"NO":true,"PT":true,"PM":true,"SM":true,"RS":true,"SI":true,"ES":true,"SJ":true,"SE":true,"CH":true,"TW":true,"GB":true,"US":true}

addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request))
});

async function fetchAndApply(request) {
    const countryCode = request.headers.get("cf-ipcountry");
    if (allowedCountries[countryCode]) {
        return await fetch(request);
    }
    return new Response(null, {
        status: 500
    })
}
