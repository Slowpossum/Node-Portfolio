const path = require('path');
const fs = require('fs');

const artFolder = "../public/assets/images/art";

module.exports = app => {
    app.get('/images', (req, res) => {
        let images = [];

        fs.readdirSync(path.join(__dirname, artFolder)).forEach(file => {
            images.push(file);
        });

        res.json(images);
    });
};