const fs = require('fs');
const Vigenere = require('caesar-salad').Vigenere;

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
        return data;
    },
    addItem(item) {
        data = {
            decoded: item.message,
            password: item.password,
            encoded: Vigenere.Cipher(item.password).crypt(item.message)
        };
        this.save();
        this.init();
    },
    addItemDecoded(item){
        data = {
            decoded:Vigenere.Decipher(item.password).crypt(item.message),
            password: item.password,
            encoded:item.message
        }
        this.save();
        this.init();
    },
    save() {
        fs.writeFileSync(filename,JSON.stringify(data));
    }
};