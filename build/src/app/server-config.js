"use strict";

 angular.module("allcast.server-config", [])

.constant("ENV", {
  "name": "development",
  "API_SERVER": "http://localhost:3000/api/v1.0/",
  "SOCKET_SERVER": "http://localhost:3000/"
})

;