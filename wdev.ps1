if ($args.Count -eq 0) {
    Write-Host "ERROR : Invalid arguments. "
    exit 1
}

$project = [string]$args[0]
$project = $project.TrimStart(".\projects\")

$replace_chars = " ", "/", ":", "*", "?", "<", ">", "|", "'", '"', "``", "`¥"
foreach ($char in $replace_chars) {
    $project = $project.Replace($char, "-")
}

if (-not (Test-Path "projects/$project")) {
    Write-Host "ERROR : The project $project not exists."
    exit 1
}

$currentDir = Get-Location
Set-Location "projects/$project"

if (Test-Path fxhash.js) {
    Write-Host "[Ctrl+C] stop"
    Start-Process powershell -ArgumentList "-NoExit","-Command &{fxhash-dev}"
}
else {
    Start-Process "http://localhost:3000/projects/$project"
}

Set-Location $currentDir
