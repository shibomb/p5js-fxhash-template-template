Get-ChildItem (Get-Location) |
Where-Object {-not $_.PsIsContainer -and $_.Name -eq ".env"} |
Get-Content |
ForEach-Object {
    $key, $value = $_.split('=', 2);
    $value = $value.Replace('"', '')
    Invoke-Expression "`$$key='$value'"
}

if ($args.Count -eq 0) {
    Write-Host "INFO : no args. create auto ymdhis project"
    $project = Get-Date -Format "yyyyMMddHHmmss"
    $copyfxhash = 1
} elseif ($args.Count -eq 1) {
    if ($args[0] -eq 0) {
        Write-Host "INFO : 1 args zero. create auto ymdhis project without fx(hash)"
        $project = Get-Date -Format "yyyyMMddHHmmss"
        $copyfxhash = 0
    } else {
        $project = $args[0]
        $copyfxhash = 1
    }
} else {
    $project = $args[0]
    if ($null -eq $args[1]) {
        $copyfxhash = 1
    } else {
        $copyfxhash = $args[1]
    }
}

$project = $project.TrimStart("projects/")

$replace_chars = "/"
$PROJECT = $project.Replace($replace_chars, "-")

$replace_chars = " ", "/", ":", "*", "?", "<", ">", "|", "'", '"', "``", "`¥"
foreach ($char in $replace_chars) {
    $project = $project.Replace($char, "-")
}

if (Test-Path "projects/$project") {
    Write-Host "ERROR : The directory $project already exists."
    exit 1
}

Write-Host "copying p5js"
Copy-Item -Recurse -Force "./templates/p5js" "./projects/$project"

if ($copyfxhash -ne 0) {
    Write-Host "copying fxhash"
    Copy-Item -Recurse -Force "./templates/fxhash/*" "./projects/$project"
}

$currentDir = Get-Location
Set-Location "projects/$project"

if (Test-Path fxhash.js) {
    Write-Host "updating fxhash"
    fxhash-update
}

Write-Host "set project informations"

function setProjectInfo {
    $file = $args[0]
    $lines = Get-Content $file
    $lines = $lines.Replace("[ART]", $PROJECT)
    $lines = $lines.Replace("[ARTIST]", $ARTIST)
    $lines = $lines.Replace("[LICENSE]", $LICENSE)
    Set-Content $file $lines
}

setProjectInfo "index.html"
setProjectInfo "LICENSE"
setProjectInfo "sketch.js"

Set-Location $currentDir
Write-Host "finished!"
