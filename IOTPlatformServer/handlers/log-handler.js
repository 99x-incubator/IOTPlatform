'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1'
});

module.exports.log = (event, context, callback) => {
  const timestamp = new Date().toString();
  console.log(event.body);
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      location: data.location,
      type: data.type,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  };

  console.log(params);

  Promise.resolve()
    .then(res => {
      dynamoDb.put(params, error => {
        if (error) {
          throw new Error(error);
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify(params.Item)
        };
        callback(null, response);
      });
    })
    .catch(err => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ err: err })
      });
    });
};
