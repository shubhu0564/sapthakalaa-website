Set-Location 'C:\Users\shubham\Downloads\omkar-folio-main\omkar-folio-main'
$json = '{"name":"Test","email":"test@example.com","subject":"Hello","message":"Testing"}'
Invoke-RestMethod -Uri 'http://localhost:5000/api/send-email' -Method Post -Body $json -ContentType 'application/json' | ConvertTo-Json -Depth 5
