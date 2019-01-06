const Twilio = require('twilio');
const client = new Twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const twilioNumber = '+12558328453'; // your twilio phone number
/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports = module.exports = (req, res) => {
  const phoneNumber = '+15555557777';
  const body = 'Woot! We made a big sale';

  const textMessage = {
    body: body,
    to: phoneNumber, // Text to this number
    from: twilioNumber // From a valid Twilio number
  };

  return client.messages.create(textMessage)
    .then(message => res.send({ success: true }))
    .catch(err => res.status(422).send(err));
};
