#!/usr/bin/env bash

rsync -aP "webpack/patch/JsonpMainTemplate.runtime.js" "node_modules/webpack/lib/JsonpMainTemplate.runtime.js"
rsync -aP "webpack/patch/process-update.js" "node_modules/webpack-hot-middleware/process-update.js"
