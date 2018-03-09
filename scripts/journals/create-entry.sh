#!/bin/bash

curl "http://localhost:4741/journals" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "journal": {
      "state": "'"${STATE}"'",
      "location_name": "'"${LOCATION_NAME}"'",
      "rating": "'"${RATING}"'",
      "comments": "'"${COMMENTS}"'",
      "date": "'"${DATE}"'",
      "time": "'"${TIME}"'"
    }
  }'

echo
