#!/usr/bin/env sh
set -eu

project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
html_file="$project_dir/index.html"
htaccess_file="$project_dir/.htaccess"

json_ld_hash=$(
  perl -0777 -ne 'if (/<script type="application\/ld\+json">(.*?)<\/script>/s) { print $1 }' "$html_file" \
    | openssl dgst -sha256 -binary \
    | openssl base64 -A
)

if [ -z "$json_ld_hash" ]; then
  printf '%s\n' 'Não foi possível calcular o hash do JSON-LD.' >&2
  exit 1
fi

JSON_LD_HASH="$json_ld_hash" perl -0pi -e \
  's/sha256-[A-Za-z0-9+\/=]+/sha256-$ENV{JSON_LD_HASH}/g' \
  "$htaccess_file"

printf 'Hash CSP atualizado: sha256-%s\n' "$json_ld_hash"
