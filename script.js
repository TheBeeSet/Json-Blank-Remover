const remove = 'Blank' // Place the attribute value that you want to remove here

const fs = require('fs');
fs.rmSync('./build/', { recursive: true, force: true });
fs.mkdirSync('./build/');
for (const file of fs.readdirSync('./place_your_json_files_here/')) {
    if (file === "you_can_delete_this_file") {
        continue;
    }
    let data = JSON.parse(fs.readFileSync('./place_your_json_files_here/' + file));
    for (var i = 0; i < data.attributes.length; i++) {
        if (data.attributes[i].value === remove)
        {
            data.attributes.splice(i, 1);
            i -= 1;
        }
        fs.writeFileSync('./build/' + file, JSON.stringify(data, null, 2));
     }
     console.log("Removing " + "'" + remove + "' from " + file)
}