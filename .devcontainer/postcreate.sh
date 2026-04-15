#!/bin/bash

# Load nvm and install the Node version specified in .nvmrc
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install
nvm use

npm install
