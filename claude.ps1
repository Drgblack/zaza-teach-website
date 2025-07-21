param (
    [string]$prompt
)

# 1. Use this ONLY if you haven’t already set the key in the terminal:
# $env:ANTHROPIC_API_KEY = "sk-ant-api03-..."

# 2. Pull from the current shell environment
$apiKey = $env:ANTHROPIC_API_KEY

if (-not $apiKey) {
    Write-Host "❌ ERROR: API key not set. Run:`n$env:ANTHROPIC_API_KEY = 'your-key'"
    exit
}

# 3. Build request headers and body
$headers = @{
    "x-api-key" = $apiKey
    "anthropic-version" = "2023-06-01"
    "Content-Type" = "application/json"
}

$body = @{
    model = "claude-3.5-sonnet-20241022"
    max_tokens = 1024
    messages = @(
        @{
            role = "user"
            content = $prompt
        }
    )
} | ConvertTo-Json -Depth 10

# 4. Make the API call
try {
    $response = Invoke-RestMethod -Method Post -Uri "https://api.anthropic.com/v1/messages" -Headers $headers -Body $body
    $response.content
} catch {
    Write-Host "❌ API call failed:"
    $_
}
