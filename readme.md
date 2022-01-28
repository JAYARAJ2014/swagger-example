# Simplest Swagger Example Node JS

A very minimalistic example for creating Swagger End points for NodeJS api

Requirements:
Install the following packages

```
swagger-jsdoc
swagger-ui-express

```

Create swagger options and initialize with necessary values

```
var options = {
  swaggerDefinition: {
    info: {
      title: 'Books Api',
      version: '1.0.0',
    },
  },
  apis: ['index.js'],
};

```

Create a swaggerJs object with the options

Serve the swagger end points

```
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

```

Annote routes with @swagger
