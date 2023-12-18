if ($args.Count -eq 0) {
    Write-Host "ERROR : Invalid arguments. "
    exit 1
}

$current_time = Get-Date -Format "yyyyMMddHHmmss"

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
    fxhash-capture
    Move-Item -Path "./capture-*.jpg" -Destination "../../captures/${project}-${current_time}.jpg"
}
else {
    Write-Host "SKIP : No fxhash project"
}

Set-Location $currentDir
