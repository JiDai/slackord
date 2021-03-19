// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
    try {
        const subject = event.queryStringParameters.name || 'World';
        return {
            statusCode: 200,
            body: JSON.stringify({
                    path: event.path,
                    httpMethod: event.httpMethod,
                    headers: event.headers,
                    queryStringParameters: event.queryStringParameters,
                    body: event.body,
                    isBase64Encoded: event.isBase64Encoded,
                }
            )
        };
    } catch (error) {
        return {statusCode: 500, body: error.toString()};
    }
};

module.exports = {handler};
