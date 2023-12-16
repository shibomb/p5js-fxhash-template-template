#!/bin/bash

source .env

if [ $# -eq 0 ]; then
    echo "ERROR : Invalid arguments."
    exit 1
fi

project=$1

if [ -z "$2" ]; then
    copyfxhash=1
else
    copyfxhash=$2
fi

if test -d "projects/$project"; then
    echo "ERROR : The directory $project already exists."
    exit 1
fi

# ---------------------------------------
echo "copying p5js"
cp -rf ./templates/p5js ./projects/$project

if [[ $copyfxhash -ne 0 ]]; then
    echo "copying fxhash"
    cp -rf ./templates/fxhash/* ./projects/$project
fi

pushd projects/$project

if test -e fxhash.js; then
    echo "updating fxhash"
    npx fxhash update
fi

# ---------------------------------------

# ---------------------------------------
echo "set project informations"

function setProjectInfo() {
    file=${1}
    lines=$(cat $file)
    lines=$(echo "$lines" | sed -e 's/\[ART\]/'"$project"'/g')
    lines=$(echo "$lines" | sed -e 's/\[ARTIST\]/'"$ARTIST"'/g')
    lines=$(echo "$lines" | sed -e 's/\[LICENSE\]/'"$LICENSE"'/g')
    echo "$lines" > $file
}

setProjectInfo index.html
setProjectInfo LICENSE
setProjectInfo sketch.js

# ---------------------------------------
echo "finished!"
