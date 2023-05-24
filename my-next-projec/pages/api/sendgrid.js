const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

const data = {
  "name": "My API Key",
  "scopes": [
    "mail.send",
    "alerts.create",
    "alerts.read"
  ]
};

const request = {
  url: `/v3/api_keys`,
  method: 'POST',
  body: data
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });

