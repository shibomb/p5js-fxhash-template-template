#!/bin/bash

if [ $# -eq 0 ]; then
    echo "ERROR : Invalid arguments. "
    exit 1
fi

project=$1

if test ! -d "projects/$project"; then
    echo "ERROR : The project $project not exists."
    exit 1
fi

pushd projects/$project

if test -e fxhash.js; then
    npx fxhash capture
    mv ./capture-*.jpg ../../captures/
else
    echo "SKIP : No fxhash project"
fi