const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            console.table(await listContacts());
            break;

        case 'get':
            console.log(await getContactById(id));
            break;

        case 'add':
            console.log(await addContact(name, email, phone));
            break;

        case 'remove':
            console.log(await removeContact(id));
            break;

        default:
            console.warn('Unknown action type!');
    }
}

invokeAction(argv);