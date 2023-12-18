#!/bin/bash

if [ $# -eq 0 ]; then
    echo "ERROR : Invalid arguments. "
    exit 1
fi

current_time=$(date +%Y%m%d%H%M%S)

project=$1
project=${project#"projects/"}

replace_chars="\ / : * ? < > | ' \" \\\ \` ¥"
project=$(echo "${project}" | tr "${replace_chars}" "-")

if test ! -d "projects/$project"; then
    echo "ERROR : The project $project not exists."
    exit 1
fi

pushd "projects/$project"

if test -e fxhash.js; then
    npx fxhash capture
    mv ./capture-*.jpg ../../captures/"$project"-$current_time.jpg
else
    echo "SKIP : No fxhash project"
fi