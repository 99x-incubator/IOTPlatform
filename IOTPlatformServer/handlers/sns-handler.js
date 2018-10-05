'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: 'REGION' });

module.exports.snsTopics = (event, context, callback) => {
    const data = JSON.stringify(event.body);
    const message = data.message;
    const topic = data.topic;

    // Create publish parameters
    var params = {
        Message: message, /* required */
        TopicArn: topic
    };

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
        function (data) {
            console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
            console.log("MessageID is " + data.MessageId);
        }).catch(
            function (err) {
                console.error(err, err.stack);
            });

};
