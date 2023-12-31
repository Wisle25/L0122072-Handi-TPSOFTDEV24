/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('authors', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true
        },
        name: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        age: {
            type: 'INT',
            notNull: true
        }
    })
};

exports.down = pgm => {
    pgm.dropTable('authors')
};
