# Node.js-REST-API-task

- Create REST API using [Serverless Framework](https://www.serverless.com/) and [Express.js](https://expressjs.com/)
- Connect application to [DynamoDB](https://aws.amazon.com/ru/dynamodb/)
- Write test for endpoints*

## Install

    $ git clone https://github.com/bespacefor/Node.js-REST-API
    $ npm install
    $ npm deploy

## Tests
You can use [curls](https://curl.se/) or [Postman app](https://www.postman.com/) for online testing. Endpoints:

- POST https://w6qwak6qf2.execute-api.us-east-1.amazonaws.com/dev/todos - create a new item;
- GET https://w6qwak6qf2.execute-api.us-east-1.amazonaws.com/dev/todos - get all to-do items; 
- GET https://w6qwak6qf2.execute-api.us-east-1.amazonaws.com/dev/todos/{id} - get a particular to-do item;
- PUT https://w6qwak6qf2.execute-api.us-east-1.amazonaws.com/dev/todos/{id} - update a particular to-do item;
- DELETE https://w6qwak6qf2.execute-api.us-east-1.amazonaws.com/dev/todos/{id} - delete a particular to-do item.
