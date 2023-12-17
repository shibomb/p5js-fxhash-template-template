#!/bin/bash

if [ $# -eq 0 ]; then
    echo "ERROR : Invalid arguments. "
    exit 1
fi

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
    echo "[Ctrl+C] stop"
    npx fxhash dev
else
    open http://localhost:3000/projects/"$project"
fi