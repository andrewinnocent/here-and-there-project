#!/bin/bash

curl "http://localhost:4741/journals/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
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
