const AWS = require('aws-sdk');
const fs = require('fs');

require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

const s3 = new AWS.S3();

let fileName = 'Forma-Pago-SEE-SOL.jpg';
let fileContent = fs.readFileSync(fileName);

let params = {
    Bucket: 'test-bucket-db-client',
    Key: 'archivo-s3/' + fileName,
    Body: fileContent
};

s3.upload(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Archivo subido exitosamente en", data.Location);
    }
})