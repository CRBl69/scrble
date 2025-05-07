let fs = require('fs');
require('dotenv').config();

let files = [
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
]

let content = `export const environment = { production: true, domain: "${process.env.BACKEND_DOMAIN ? process.env.BACKEND_DOMAIN : "localhost"}", port: "${process.env.BACKEND_PORT ? process.env.BACKEND_PORT : "6942"}" };`

for(let file of files) {
    fs.writeFile(file, content, (err) => {
        if(err) throw err;
    });
}
