const regions = require('./killSwitch_regions');

const allowedRegions = ["Northern America", "Western Europe", "Northern Europe", "Southern Europe", "Eastern Asia", "Australasia"]

const allowedAlpha2 = regions.filter(r => allowedRegions.find(a => a ==r["sub-region"])).reduce((accumulator, current) =>{
    accumulator[current['alpha-2']] = true;
    return accumulator
}, {});

console.log(JSON.stringify(allowedAlpha2));
