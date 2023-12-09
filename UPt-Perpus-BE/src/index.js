const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const booksHandler = require('./handlers/books')
const authorsHandler = require('./handlers/authors')
const categoriesHandler = require('./handlers/categories')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
});
app.use(cors())
    
// Books
app.get('/books', booksHandler.getBooks);
app.get('/books/:id', booksHandler.getBookId);
app.post('/books', booksHandler.createBooks);
app.put('/books/:id', booksHandler.updateBookId);
app.delete('/books/:id', booksHandler.deleteBookId);

// Authors
app.get('/authors', authorsHandler.getAuthors);
app.get('/authors/:id', authorsHandler.getAuthorId);
app.post('/authors', authorsHandler.createAuthor);
app.put('/authors/:id', authorsHandler.updateAuthorId);
app.delete('/authors/:id', authorsHandler.deleteAuthorId);

// Categories
app.get('/categories', categoriesHandler.getCategories);
app.get('/categories/:id', categoriesHandler.getCategoryId);
app.post('/categories', categoriesHandler.createCategory);
app.put('/categories/:id', categoriesHandler.updateCategoryId);
app.delete('/categories/:id', categoriesHandler.deleteCategoryId);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})