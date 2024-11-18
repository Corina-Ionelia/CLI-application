const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');


// Definirea funcției listContacts
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Eroare la citirea contactelor:', error.message);
    }
}

// Exportarea funcției listContacts
module.exports = {
    listContacts,
};