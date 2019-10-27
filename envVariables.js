'use strict';

module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        variable: 'The value of the variables is: ' + process.env.OTHER_API_KEY
      }),
  };
};