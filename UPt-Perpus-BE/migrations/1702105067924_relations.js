/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addConstraint('books', 'fk_books_authors', 'FOREIGN KEY(author) REFERENCES authors(id) ON DELETE CASCADE'),
    pgm.addConstraint('books', 'fk_books_categories', 'FOREIGN KEY(category) REFERENCES categories(id) ON DELETE CASCADE')
};

exports.down = pgm => {
    pgm.dropConstraint('books', 'fk_books_authors'),
    pgm.dropConstraint('books', 'fk_books_categories')
};
