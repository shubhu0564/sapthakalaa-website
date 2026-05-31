<#
PowerShell helper: runs docker-compose if Docker is available; otherwise builds and starts services locally.
#>
param()

function Has-Command([string]$cmd) {
    $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (Has-Command docker) {
    Write-Host "Docker detected — bringing up containers..."
    docker-compose up -d --build
    Write-Host "Containers started. Use 'docker-compose logs -f' to view logs."
} else {
    Write-Host "Docker not detected. Building frontend and starting servers locally."
    npm run build
    Start-Process powershell -ArgumentList "-NoExit -Command 'cd $(Resolve-Path .) ; npm run server'"
    Start-Process powershell -ArgumentList "-NoExit -Command 'cd $(Resolve-Path .) ; npm run dev'"
    Write-Host "Servers started in new terminals."
}
