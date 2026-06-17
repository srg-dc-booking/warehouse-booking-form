exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405 };
  }

  const PA_URL = process.env.POWER_AUTOMATE_URL;

  try {
    await fetch(PA_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    event.body,
    });
    return { statusCode: 200 };
  } catch (err) {
    return { statusCode: 500 };
  }
};
