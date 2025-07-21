require('dotenv').config({ path: '.env.local' });

async function testAnthropicAPI() {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.log('❌ ANTHROPIC_API_KEY not found in environment variables');
    return;
  }

  const body = {
    model: "claude-3.5-sonnet-20241022",
    max_tokens: 100,
    messages: [
      { role: "user", content: "Say hello." }
    ]
  };

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  console.log('✅ Claude Response:', data);
}

testAnthropicAPI();
