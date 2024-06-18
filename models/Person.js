const db = require('../config/database');

class Person {

    constructor(id, name, lastname, birthday) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
    }

    static async fetchAll() {
        const [rows, fields] = await db.execute('SELECT * FROM people');
        return rows;
    }

    static async findById(id) {
        const [rows, fields] = await db.execute('SELECT * FROM people WHERE id = ?', [id]);
        return rows[0];
    }

    static async save(person) {
        if (person.id) {
            await db.execute(
                'UPDATE people SET name = ?, lastname = ?, birthday = ? WHERE id = ?',
                [person.name, person.lastname, person.birthday, person.id]
            );
        } else {
            await db.execute(
                'INSERT INTO people (name, lastname, birthday) VALUES (?, ?, ?)',
                [person.name, person.lastname, person.birthday]
            );
        }
    }

    static async deleteById(id) {
        await db.execute('DELETE FROM people WHERE id = ?', [id]);
    }

}

module.exports = Person;