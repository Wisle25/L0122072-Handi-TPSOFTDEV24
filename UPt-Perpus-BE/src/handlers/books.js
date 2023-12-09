const query = require("../queries")

const createBooks = (req, res) => {
    const { name, author, category } = req.body;
    const id = crypto.randomUUID();

    query.pool.query('INSERT INTO books(id, name, author, category) VALUES ($1, $2, $3, $4) RETURNING id', [id, name, author, category], (err, result) => {
        if (err) console.log(err);

    })
}

const getBooks = (req, res) => {
    query.pool.query(
        `SELECT * FROM books ORDER BY name ASC`, (err, result) => {
        res.status(200).json(result.rows);
    });
}

const getBookId = (req, res) => {
    const id = req.params.id;

    query.pool.query('SELECT * FROM books WHERE id = $1', [id], (err, result) => {
        res.status(200).json(result.rows);
    })
}

const updateBookId = (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    query.pool.query('UPDATE books SET name = $1 WHERE id = $2', [name, id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`Books with ID: ${id} is updated!`);
    })
}

const deleteBookId = (req, res) => {
    const id = req.params.id;

    query.pool.query('DELETE FROM books WHERE id = $1', [id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`Books deleted by id: ${id}`)
    })
}

module.exports = {
    createBooks,
    getBookId,
    getBooks,
    updateBookId,
    deleteBookId
}
