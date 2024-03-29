#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run docs:build

# navigate into the build output directory
cd playground/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Chore: Deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tidaltheory/firmament.git main:gh-pages

cd -
