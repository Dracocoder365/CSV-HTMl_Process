import csv from 'csv-parser';
import  fs from 'fs';


export function CSVtoJSON() {
  const dataJson = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => dataJson.push(data))
  .on('end', () => {
    console.log(dataJson);
    
  });
  return dataJson;
}