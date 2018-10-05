'use strict';

module.exports.test = (event, context, callback) => {
    console.log("test works!");
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: "works fine"})
      });
};