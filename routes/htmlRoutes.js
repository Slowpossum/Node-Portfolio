const path = require('path');

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get("/fanpage", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/fanpage.html'));
    });
};