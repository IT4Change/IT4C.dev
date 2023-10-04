#!/bin/bash

# Find current directory & configure paths
SCRIPT_PATH=$(realpath $0)
SCRIPT_DIR=$(dirname $SCRIPT_PATH)
PROJECT_ROOT=$SCRIPT_DIR/../..
DEPLOY_DIR=$i
BUILD_DIR=$PROJECT_ROOT/docs/.vuepress/dist

# assuming you are already on the right branch
git pull -ff

GIT_REF=$(git rev-parse --short HEAD)
DEPLOY_DIR_REF=$1-$GIT_REF

# Parameter is a proper directory?
if [ -d "$DEPLOY_DIR_REF" ]; then
    return "Directory '$DEPLOY_DIR_REF' does already exist" 2>/dev/null || exit 1
fi

# Build the project
cd $PROJECT_ROOT
rm -R $BUILD_DIR
npm run build

# Copy files and Sym link
cp $BUILD_DIR $DEPLOY_DIR_REF
ln -sf $DEPLOY_DIR_REF $DEPLOY_DIR