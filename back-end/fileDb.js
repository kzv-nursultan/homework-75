const fs = require('fs');

const filename = './db.json';

let data = {};

module.exports = {
    init() {
        try {
            const fileData = fs.readFileSync(filename);
            data = JSON.parse(fileData);
        } catch {
            data = {};
        };
    },
    getItems() {
        try {
            const fileData = fs.readFileSync(filename);
            return data = JSON.parse(fileData);
        } catch {
            return data = {};
        };
    },
    addItem(item) {
        data = item;
        console.log('on additem',data);
        this.save();
    },
    save() {
        fs.writeFileSync(filename,JSON.stringify(data));
    }
};