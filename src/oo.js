import {CSVtoJSON} from './CSV-JSON.js';
import {quickSort} from './quickSort.js';
let dataJsonArr = await CSVtoJSON('data.csv');
/*
In the form

[
    {
        ID: 'UYTFGVUGHVYCVYTG",
        Name: "BRAND NAME",
        'logo url': ' https://images.unidays.world/i/customers/mobile/active/hyvbgv8yviyvvui'
    }
        {
        ID: 'OTHER UYTFGVUGHVYCVYTG",
        Name: "OTHER BRAND NAME",
        'logo url': ' OTHER https://images.unidays.world/i/customers/mobile/active/hyvbgv8yviyvvui'
    }
]
*/ 

let nameArr = []

for(const item of dataJsonArr) {
    nameArr.push(item.Name);

}

console.log(quickSort(nameArr));