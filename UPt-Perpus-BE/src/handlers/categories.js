const query = require("../queries")
const crypto = require('crypto')

const createCategory = (req, res) => {
    const { name } = req.body;
    const id = crypto.randomUUID();

    query.pool.query('INSERT INTO categories(id, name) VALUES ($1, $2) RETURNING id', [id, name], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`Category added with ID: ${result.rows[0].id}`)
    })
}

const getCategories = (req, res) => {
    query.pool.query('SELECT * FROM categories ORDER BY name ASC', (err, result) => {
        res.status(200).json(result.rows);
    });
}

const getCategoryId = (req, res) => {
    const id = req.params.id;

    query.pool.query('SELECT * FROM categories WHERE id = $1', [id], (err, result) => {
        res.status(200).json(result.rows);
    })
}

const updateCategoryId = (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    query.pool.query('UPDATE categories SET name = $1 WHERE id = $2', [name, id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`Categories with ID: ${id} is updated!`);
    })
}

const deleteCategoryId = (req, res) => {
    const id = req.params.id;

    query.pool.query('DELETE FROM categories WHERE id = $1', [id], (err, result) => {
        if (err) console.log(err);

        res.status(200).send(`Categories deleted by id: ${id}`)
    })
}

module.exports = {
    createCategory,
    getCategories,
    getCategoryId,
    updateCategoryId,
    deleteCategoryId
}
