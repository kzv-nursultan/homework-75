const fs = require('fs');

const filename = './db.json';

let data = {};

module.export = {
    init() {
        try {
            const fileData = fs.readFileSync(filename);
            data = JSON.parse(fileData);
        } catch {
            data = {};
        };
    },
    getItems() {
        return data;
    },
    addItem(item) {
        data = item;
        this.save();
    },
    save() {
        fs.writeFileSync(filename,JSON.stringify(data));
    }
};