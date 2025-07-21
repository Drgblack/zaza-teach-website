import 'dotenv/config';

const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.log('❌ No API key found');
  process.exit(1);
}

const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    model: "claude-3-sonnet-20240229",
    max_tokens: 100,
    messages: [
      { role: "user", content: "Say hello!" }
    ]
  })
});

const result = await response.json();
console.log(result);
