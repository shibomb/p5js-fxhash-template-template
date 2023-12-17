#!/bin/bash

if [ $# -eq 0 ]; then
    message=$(date +%Y%m%d%H%M%S)
else
    message=$1
fi

git add .
git commit -m "${message}"
git push
