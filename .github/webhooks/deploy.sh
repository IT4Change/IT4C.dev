#!/bin/sh
# Abort on any failure — a failed install or build must not take down the
# running version.
set -e

# Find current directory & configure paths
SCRIPT_PATH=$(realpath $0)
SCRIPT_DIR=$(dirname $SCRIPT_PATH)
PROJECT_ROOT=$SCRIPT_DIR/../..
# by default this will create folders in the project root
DEPLOY_DIR=${1:-test}
# release tag to deploy; without it the latest master is deployed
TAG=$2
BUILD_DIR=$PROJECT_ROOT/docs/.vuepress/dist

cd $PROJECT_ROOT

if [ -n "$TAG" ]; then
  git fetch --tags
  git checkout "$TAG"
else
  git checkout master
  git pull --ff-only
fi

# Frontend
GIT_REF=${TAG:-$(git rev-parse --short HEAD)}
DEPLOY_DIR_REF=$DEPLOY_DIR-$GIT_REF

## Parameter is a proper directory?
if [ -d "$DEPLOY_DIR_REF" ]; then
    echo "Directory '$DEPLOY_DIR_REF' does already exist"
    exit 1
fi

## Build the project
rm -rf $BUILD_DIR
npm ci
npm run build

## Copy files and Sym link
mkdir "$DEPLOY_DIR_REF/"
cp -r $BUILD_DIR/* "$DEPLOY_DIR_REF/"
ln -sfn "$DEPLOY_DIR_REF" $DEPLOY_DIR

# backend
BACKEND_ROOT=$PROJECT_ROOT/backend
BACKEND_SERVICE=it4c-backend

cd $BACKEND_ROOT

# build before stopping, so a failed build keeps the old backend running
npm ci --include=dev
npm run build

# `|| true`: on the very first deploy there is no process to stop
pm2 stop $BACKEND_SERVICE || true
pm2 delete $BACKEND_SERVICE || true

pm2 start 'npm run start' --name $BACKEND_SERVICE
