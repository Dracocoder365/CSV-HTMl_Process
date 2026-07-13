import {CSVtoJSON} from './CSV-JSON.js';

let dataJson = await CSVtoJSON('data.csv');
console.log(dataJson);
