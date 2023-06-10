#!/bin/bash

TO_FOLDER="dist"

mkdir -p $TO_FOLDER

cp package.json $TO_FOLDER/package.json

cp -r android $TO_FOLDER/android

cp -r ios $TO_FOLDER/ios
cp -r servisofts-component.podspec $TO_FOLDER/servisofts-component.podspec

cp -r src/font/ $TO_FOLDER/font
cp -r src/img/ $TO_FOLDER/img

cp README.md $TO_FOLDER/README.md
