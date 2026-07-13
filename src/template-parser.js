import fs from 'fs';

// data = [
//  ["STRING-TO-REPLACE", "CONTENT"],
//  ["BRAND-NAME", "a brand"],
//  ["BRAND-IMAGE", "url to image"]
// ]

export default function templateParser(orderedData, templatePath) {
    let template = fs.readFileSync(templatePath, "utf-8");

    let out = ""
    for (const entry of orderedData) {
        let processed = template;
        const dataToReplace = [
            ["BRAND-NAME", entry["Name"]],
            ["BRAND-LOGO", entry["logo url"]]
        ];
        for (const item of dataToReplace) {
            processed = processed.replace(new RegExp(`%%${item[0]}%%`, "g"), item[1]);
        }

        out = out.concat("", processed)
    }

    return out;
}
