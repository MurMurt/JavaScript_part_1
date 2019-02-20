// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let commandSplitted = command.split(" ");
    const action = commandSplitted[0]
    switch (action) {
        case "ADD":
            return add(commandSplitted[1], commandSplitted[2]);
        case "REMOVE_PHONE":
            return remove(commandSplitted[1]);
        case "SHOW":
            return show();
    }
};

function add(contact, phones) {
    const phonesList = phones.split(",");
    if (!(contact in phoneBook)) {
        phoneBook[contact] = [];
    }
    phonesList.forEach(phone => {
        if (!phoneBook[contact].includes(phone)) {
            phoneBook[contact].push(phone)
        }
    });
}

function remove(phone) {
    const keys = Object.keys(phoneBook).sort();
    for (let i = 0; i < keys.length; i++) {
        const index = phoneBook[keys[i]].indexOf(phone);
        if (index !== -1) {
            phoneBook[keys[i]].splice(index, 1);
            return true;
        }
    }
    return false;
}

function show() {
    const keys = Object.keys(phoneBook).sort();
    let res = [];
    for (let i = 0; i < keys.length; i++) {
        if (phoneBook[keys[i]].length > 0) {
            res.push(keys[i] + ": " + phoneBook[keys[i]].join(", "));
        }
    }
    return res;
}