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

clarity_hash=$(
  perl -0777 -ne 'if (/<script type="text\/javascript" data-clarity-project="ytlwefl3i7">(.*?)<\/script>/s) { print $1 }' "$html_file" \
    | openssl dgst -sha256 -binary \
    | openssl base64 -A
)

google_tracking_hash=$(
  perl -0777 -ne 'if (/<script type="text\/javascript" data-google-tracking="GTM-PKMM67CF">(.*?)<\/script>/s) { print $1 }' "$html_file" \
    | openssl dgst -sha256 -binary \
    | openssl base64 -A
)

# Hashes dos scripts inline emitidos pela versão publicada do container GTM.
# Revise esta lista se o Tag Assistant apontar novas violações após publicar o container.
gtm_runtime_hashes="'sha256-H7pzMfBqoZRqslLdePH61aP8y7jGDevYF7LLL4eYsh8=' 'sha256-pSBCwxWCCpjLxdDEeVR7SX8eIUtZutiHLz/snxHdYIA=' 'sha256-Qsg2aGQdqOh3WCUqg7btkPg/2yEjrYqLQObVT8uBZ/Y=' 'sha256-wy1udmys4ev2YfWvlSrVGhmL3upSvMOxbaYlRihLYYg='"

if [ -z "$json_ld_hash" ] || [ -z "$clarity_hash" ] || [ -z "$google_tracking_hash" ]; then
  printf '%s\n' 'Não foi possível calcular os hashes dos scripts inline.' >&2
  exit 1
fi

JSON_LD_HASH="$json_ld_hash" CLARITY_HASH="$clarity_hash" GOOGLE_TRACKING_HASH="$google_tracking_hash" GTM_RUNTIME_HASHES="$gtm_runtime_hashes" perl -0pi -e \
  's/(script-src(?:-elem)? \x27self\x27)(?: \x27sha256-[A-Za-z0-9+\/=]+\x27)+/$1 . " \x27sha256-" . $ENV{JSON_LD_HASH} . "\x27 \x27sha256-" . $ENV{CLARITY_HASH} . "\x27 \x27sha256-" . $ENV{GOOGLE_TRACKING_HASH} . "\x27 " . $ENV{GTM_RUNTIME_HASHES}/ge' \
  "$htaccess_file"

perl -0pi -e \
  's|https://www\.googleadservices\.com https://www\.google\.com|https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com|g' \
  "$htaccess_file"

printf 'Hashes CSP atualizados: JSON-LD sha256-%s | Clarity sha256-%s | Google sha256-%s\n' "$json_ld_hash" "$clarity_hash" "$google_tracking_hash"
