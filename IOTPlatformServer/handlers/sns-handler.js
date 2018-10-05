'use strict';
const AWS = require('aws-sdk');

module.exports.snsTopics = (event, context, callback) => {
    event = {
      body:{
        type:'Biscuit',
        location:'Hq-1',
        mobileNo:'+94714392170'
      }
    };
      
    var type = event.body.type;
    var location = event.body.location;
    var mobileNo = event.body.mobileNo;

    AWS.config.update({region: 'us-east-1'});

    var params = {
      Message: type +' needed in '+location, /* required */
      PhoneNumber: mobileNo,
    };

    

    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
    
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
      function(data) {
        console.log("MessageID is " + data.MessageId);
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });

    callback(null,{name:'Namila'});

};
