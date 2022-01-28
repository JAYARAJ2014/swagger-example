const express = require('express');
const swaggerJs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
var options = {
  swaggerDefinition: {
    info: {
      title: 'Books Api',
      version: '1.0.0',
    },
  },
  apis: ['index.js'],
};

app.listen(5000, () => {
  console.log('App Started at 5000');
});
const swaggerDocs = swaggerJs(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /:
 *     get:
 *         description: Home
 *         responses:
 *             200:
 *                 description: Success
 */
app.get('/', (req, res) => {
  res.send('Welcome Home');
});

/**
 * @swagger
 * /books:
 *      get:
 *          description: Get all books
 *          responses:
 *              200:
 *                  description: Success
 */

app.get('/books', (req, res) => {
  res.send([
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: 'The Pale Blue Dot' },
  ]);
});

/**
 * @swagger
 * /books:
 *      post:
 *          description: Add a new book
 *          responses:
 *              201:
 *                  description: Success
 */

app.post('/books', (req, res) => {
  res.status(201).send();
});
