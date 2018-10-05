'use strict';

const AWS = require('aws-sdk');

module.exports.deviceHandler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    console.log(data);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      });
};