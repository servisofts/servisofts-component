#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No se ha proporcionado ningún parámetro."
    exit 1
fi

rm -rf $1
mkdir $1
cp package.json $1/package.json
cp -r src/font/ $1/font
cp -r src/img/ $1/img
cp README.md $1/README.md
tsc -p ./tsconfig.json
