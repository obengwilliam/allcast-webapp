"use strict";

 angular.module("allcast.config", [])

.constant("ENV", {
  "name": "staging",
  "API_SERVER": "allcast-signal-server-stage.herokuapp.com/api/v1.0/"
})

;