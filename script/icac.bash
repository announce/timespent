#!/usr/bin/env bash

icac () {
  set -u

  start () {
    export NODE_ENV=development
    export FIREBASE_API_KEY="__YOURS_HERE__"
    yarn start
  }

  release () {
    export NODE_ENV=production
    yarn run build
  }

  die () {
    MESSAGE="${1:-Something went wrong.}"
    echo "[$(basename "$0")] ERROR: ${MESSAGE}" >&2
    exit 1
  }

  usage () {
    SELF="$(basename "$0")"
    echo -e "${SELF}
    \\nUsage: ${SELF} [arguments]
    \\nArguments:"
    declare -F | awk '{print "\t" $3}' | grep -v "${SELF}"
  }

  if [ $# = 0 ]; then
    usage
  elif [ "$(type -t "$1")" = "function" ]; then
    $1 "$(shift && echo "$@")"
  else
    die "No such command: $*"
  fi
}

icac "$@"
