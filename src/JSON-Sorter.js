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
for(let i = 0; i < dataJsonArr.length; i++) {
    nameArr.push([dataJsonArr[i].Name, i]);
}

/* 
makes an array of the names marking the original index of them
in form 
[
    [name1, ogindex1],
    [name1, ogindex2]
]
*/
nameArr = [...quickSort(nameArr)];

/* 
sorts the array while keeping the original array index connected to the name
*/


let orderedDataJsonArr = [];
for(let i = 0; i < nameArr.length; i++) {
    orderedDataJsonArr.push(dataJsonArr[nameArr[i][1]]);
}
/*
    Sorts the orignal array of Json data into alphabeticla order in form
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
