'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    if (typeof data.text !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Couldn\'t create the todo item.'));
        return;
    }

    const params = {
        TableName: 'todos',
        Item: {
            id: uuid.v1(),
            text: data.text,
            checked: false,
            createdAt: timestamp,
            updatedAt: timestamp
        }
    };

    dynamoDb.put(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t create the todo item.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item)
        }
        callback(null, response);
    });
};
