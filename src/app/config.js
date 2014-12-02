"use strict";

 angular.module("allcast.server-config", [])

.constant("ENV", {
  "name": "staging",
  "API_SERVER": "http://allcast-signal-server-stage.herokuapp.com/api/v1.0/",
  "SOCKET_SERVER": "http://allcast-signal-server-stage.herokuapp.com/"
})

;