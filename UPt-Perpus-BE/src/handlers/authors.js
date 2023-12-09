const query = require("../queries")

const createAuthor = (req, res) => {
    const { name, age } = req.body;
    const id = crypto.randomUUID();

    query.pool.query('INSERT INTO authors(id, name, age) VALUES ($1, $2, $3) RETURNING id', [id, name, age], (err, result) => {
        if (err) console.log(err);

        res.status(200)
    })
}

const getAuthors = (req, res) => {
    query.pool.query('SELECT * FROM authors ORDER BY name ASC', (err, result) => {
        res.status(200).json(result.rows);
    });
}

const getAuthorId = (req, res) => {
    const id = req.params.id;

    query.pool.query('SELECT * FROM authors WHERE id = $1', [id], (err, result) => {
        res.status(200).json(result.rows);
    })
}

const updateAuthorId = (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    query.pool.query('UPDATE authors SET name = $1 WHERE id = $2', [name, id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`authors with ID: ${id} is updated!`);
    })
}

const deleteAuthorId = (req, res) => {
    const id = req.params.id;

    query.pool.query('DELETE FROM authors WHERE id = $1', [id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`authors deleted by id: ${id}`)
    })
}

module.exports = {
    createAuthor,
    getAuthors,
    getAuthorId,
    updateAuthorId,
    deleteAuthorId
}
