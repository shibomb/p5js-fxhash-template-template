if ($args.Count -eq 0) {
    $message = (Get-Date -Format "yyyyMMddHHmmss")
}
else {
    $message = [string]$args[0]    
}

git add .
git commit -m "$message"
git push
