#!/bin/bash

curl "http://localhost:4741/journals" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
