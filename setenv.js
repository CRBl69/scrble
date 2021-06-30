let fs = require('fs');
require('dotenv').config();

let files = [
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
]

let content = `export const environment = { production: true, domain: "${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}" };`

for(let file of files) {
    fs.writeFile(file, content, (err) => {
        if(err) throw err;
    });
}