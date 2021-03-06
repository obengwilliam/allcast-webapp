angular.module('templates-app', ['about/about.html', 'broadcast/broadcast.html', 'details/details.html', 'home/home.html', 'listen/listen.html']);

angular.module("about/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.html",
    "");
}]);

angular.module("broadcast/broadcast.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("broadcast/broadcast.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" ng-controller=\"loginCtrl\">\n" +
    "        <div class=\"container\">\n" +
    "            <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"index.html\">Allcast</a>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "<!-- <<<<<<< HEAD\n" +
    "                <div class=\"col-xs-offset-4 col-xs-4\">\n" +
    "                    <form class=\"navbar-form\" role=\"search\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\" ng-model=\"search\" data-ng-init='init()'>\n" +
    "                            <div class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-default\" type=\"submit\" data-toggle=\"dropdown\" data-target=\"#search-dropdown\" autocomplete=\"off\"><i class=\"fa fa-search\"></i></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    <div id=\"search-dropdown\"  >\n" +
    "                        <ul class=\"dropdown-menu rs\">\n" +
    "                            <li ng-show=\"!recentBroadcasts\">\n" +
    "                                <a href=\"#\">Oops, no search results were found.</a>\n" +
    "                            </li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li class=\"rs-one\" ng-repeat=\"broadcast in recentBroadcasts|filter:search\">\n" +
    "                                <a href=\"#\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <a ui-sref=\"listen({broadcastname:broadcast.broadcastname})\">\n" +
    "                                        <div class=\"col-xs-3\">\n" +
    "                                            <img class=\"rs-img img-circle\" src=\"{{broadcast.img||'assets/img/dashboard/majorie.png'}}\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-xs-9\">\n" +
    "\n" +
    "                                            <div class=\"rs-search-name\">{{broadcast.broadcastname}}</div>\n" +
    "                                            <div class=\"rs-search-details\">Telenovela | <strong class=\"live\">{{broadcast.status}}</strong>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </a>\n" +
    "                                    </div>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"#\">Discover</a></li>\n" +
    "                    <li><a href=\"#\">Explore</a></li>\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{user.username}}\n" +
    "                         <b class=\"caret\"></b>\n" +
    "                        </a>\n" +
    "\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li><a href=\"#\">Settings</a></li>\n" +
    "                            <li><a href=\"#\">Quick links</a></li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li><a ng-click='logout()'>Logout</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "\n" +
    "             <div class=\"col-xs-offset-2 col-xs-6\">\n" +
    "                <form class=\"navbar-form\" role=\"search\">\n" +
    "                    <div class=\"input-group search-pane\">\n" +
    "                        <input type=\"text\" class=\" search form-control\" placeholder=\"Search\" name=\"q\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-default\" type=\"submit\" data-toggle=\"dropdown\" data-target=\"#search-dropdown\" autocomplete=\"off\"><i class=\"fa fa-search\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "\n" +
    "                <div id=\"search-dropdown\" class=\"search-dropdown\">\n" +
    "                    <ul class=\"dropdown-menu rs\">\n" +
    "                       <li ng-show=\"!recentBroadcasts\">\n" +
    "                           <a href=\"#\">Oops, no search results were found.</a>\n" +
    "                           <li class=\"divider\"></li>\n" +
    "                       </li>\n" +
    "                       <li class=\"rs-one\" ng-repeat=\"broadcast in recentBroadcasts|filter:search\">\n" +
    "                           <a href=\"#\">\n" +
    "                               <div class=\"row\">\n" +
    "                                   <a ui-sref=\"listen({broadcastname:broadcast.broadcastname})\">\n" +
    "                                   <div class=\"col-xs-3\">\n" +
    "                                       <img class=\"rs-img img-circle\" src=\"{{broadcast.img||'assets/img/dashboard/majorie.png'}}\">\n" +
    "                                   </div>\n" +
    "                                   <div class=\"col-xs-9\">\n" +
    "\n" +
    "                                       <div class=\"rs-search-name\">{{broadcast.broadcastname}}</div>\n" +
    "                                       <div class=\"rs-search-details\">Telenovela | <strong class=\"live\">{{broadcast.status}}</strong>\n" +
    "                                       </div>\n" +
    "                                   </div>\n" +
    "                               </a>\n" +
    "                               </div>\n" +
    "                           </a>\n" +
    "                       </li>\n" +
    "\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><a href=\"#\">Discover</a></li>\n" +
    "                <li><a href=\"#\">Explore</a></li>\n" +
    "                <li class=\"dropdown\">\n" +
    "                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{user.username}}<b class=\"caret\"></b></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a >Settings</a></li>\n" +
    "                        <li><a >Quick links</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a ng-click=\"logout()\">Log out</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "\n" +
    "\n" +
    "    <div id=\"caster-wrapper\">\n" +
    "        <div class=\"container\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-10\">\n" +
    "                    <div class=\"channel-details\">\n" +
    "                        <h5 class=\"channel-name\" >{{currentBroadcaster.name}}</h5>\n" +
    "\n" +
    "                        <h6 class=\"channel-category\"> {{currentBroadcaster.category}}</h6>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                    <div class=\"caster-profile\">\n" +
    "                        <div class=\"profile-img\">\n" +
    "                            <img src=\"assets/img/dashboard/majorie.png\" class=\"image img-responsive img-circle\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div><!-- end of .caster-wrapper -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"broadcast-controls\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <audio id=\"broadcast_audio\" autoplay></audio>\n" +
    "                <div class=\"col-xs-2 nopadding\">\n" +
    "                    <div class=\"btn btn-primary broadcast-button\"> START BROADCAST </div>\n" +
    "                    <div class=\"btn btn-primary live-button\"> BROADCASTING </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-3 \">\n" +
    "                    <div class=\"countup-timer\">\n" +
    "                        <i class=\"fa fa-volume-up fa-lg\"></i>\n" +
    "                        <small ng-bind=\"soundVolume\"></small>\n" +
    "                        <input id=\"volume\" type=\"range\"  value=\"0\" min=\"0\" max=\"10\" step=\"1\">\n" +
    "\n" +
    "                        <div id=\"time\" style=\"display: inline\" ng-bind=\"secs\">00:00:00</div>\n" +
    "                        <small>SEC</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-5 display no\n" +
    "                padding\">\n" +
    "                <i class=\"fa fa-circle\"></i>\n" +
    "                <i id=\"mic\" class=\"fa fa-microphone-slash\"></i>\n" +
    "                <i id=\"mic-on\" class=\"fa fa-microphone\"></i>\n" +
    "                <canvas id=\"visualizer\" width=\"50\" height=\"15\"></canvas>\n" +
    "                <small class=\"air-display\">OFF-AIR</small>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-1 nopadding\">\n" +
    "                <div class=\"btn btn-primary share-button\" title=\"Share this content\" data-toggle=\"modal\" data-target=\"#shareModal\">\n" +
    "                    <i class=\"fa fa-share-alt\"></i>\n" +
    "                    <small>SHARE</small>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div><!-- end of .broadcast-controls -->\n" +
    "\n" +
    "<div class=\"app-widgets\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-8 nopadding\">\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div class=\"panel-heading\">CHAT</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <ul class=\"media-list\">\n" +
    "                            <li class=\"media\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <div class=\"media\">\n" +
    "                                        <div class=\"text-muted\" >\n" +
    "                                            This channel is yet to see any chats.. Go on and be the first to comment :)\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <a class=\"pull-left\" href=\"#\">\n" +
    "                                                <img class=\"media-object img-circle \" src=\"assets/img/dashboard/majorie.png\" />\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-body\" >\n" +
    "                                                What happened to Jimmy &amp; Wade Wagon. Any releases yet?\n" +
    "                                                <br />\n" +
    "                                                <small class=\"text-muted\" >{{user.username}} | 23rd Nov at 5:00pm</small>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"media\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <div class=\"media\">\n" +
    "                                        <a class=\"pull-left\" href=\"#\">\n" +
    "                                            <img class=\"media-object img-circle img-responsive \" src=\"assets/img/dashboard/nii.png\" />\n" +
    "                                        </a>\n" +
    "                                        <div class=\"media-body\" >\n" +
    "                                            Interesting listening to you talk about Afro Blues. Awesome!!!\n" +
    "                                            <br />\n" +
    "                                            <small class=\"text-muted\">Nii Mantse Grid | 23rd Nov at 5:00pm</small>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-footer\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Message\" />\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-info send-btn\" type=\"button\">SEND</button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- </div>-->\n" +
    "            </div><!--end of .chat-window -->\n" +
    "\n" +
    "            <div class=\"col-xs-3\">\n" +
    "                <div class=\"channel-stats\">\n" +
    "                    <div class=\"stats-heading\"> CHANNEL STATISTICS</div>\n" +
    "                    <div class=\"stats-body\">\n" +
    "                        <div class=\"col-xs-12\"><i class=\"fa fa-headphones\"></i><a href=\"\"> 0 Listeners</a></div>\n" +
    "                        <div class=\"col-xs-12\"><i class=\"fa fa-heart\"></i><a href=\"\"> 0 Favourites</a></div>\n" +
    "                        <div class=\"col-xs-12\"><i class=\"fa fa-user\"></i><a href=\"\"> 0 Followers</a></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"update-heading\">LATEST UPDATES</div>\n" +
    "                    <div class=\"update-body\">\n" +
    "                        <div class=\"col-xs-12\"><i class=\"fa fa-asterisk\"></i> Sherrie joined your broadcast <small class=\"text-muted\"> 5 secs ago</small></div>\n" +
    "                    </div>\n" +
    "                </div> <!-- end of .channel-stats -->\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div><!-- end of .app-widgets -->\n" +
    "\n" +
    "<!-- Modal for social share -->\n" +
    "<div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">x</span><span class=\"sr-only\">Close</span></button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-share-alt\"></i> Share</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <h4>Share broadcast link via social media</h4>\n" +
    "                <p>\n" +
    "                    <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a> <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n" +
    "                    <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a> <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a> <a title=\"Reddit\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-reddit fa-stack-1x\"></i></span></a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Modal Starts Here -->\n" +
    "<div class=\"modal fade\" id=\"channelInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "        <h4 class=\"modal-title\">Enter Channel Details</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"container\">\n" +
    "          <form role=\"form\" name=\"broadcast\" ng-submit=\"broadCastDetails(details)\" novalidate>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label class=\"control-label\">Channel Name</label>\n" +
    "\n" +
    "              <input name=\"broadcastname\" ng-model=\"details.broadcastname\" type=\"text\" class=\"form-control\" placeholder=\"Enter Channel Name\" required>\n" +
    "              <span>\n" +
    "              <span class=\"text-center text-danger \" ng-bind=\"broadCastError\"></span><br>\n" +
    "              </span>\n" +
    "               <span ng-show=\"broadcast.broadcastname.$dirty && broadcast.broadcastname.$invalid\">\n" +
    "                    <span class=\" text-center text-danger\" ng-show=\"broadcast.broadcastname.$error.required\">Broadcast name is required\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Channel Category</label>\n" +
    "                <select name=\"broadcastcategoryname\" class=\"catelog\" ng-options=\"category.name for category in broadCastCategories\" ng-model=\"details.broadcastcategoryname\"  required>\n" +
    "                </select>\n" +
    "\n" +
    "                <span ng-show=\"broadcast.broadcastcategoryname.$dirty && broadcast.broadcastcategoryname.$invalid\">\n" +
    "                  <span class=\" text-center text-danger\" ng-show=\"broadcast.broadcastcategoryname.$error.required\">Broadcast  Category name is required\n" +
    "                  </span>\n" +
    "                </span>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "              <label for=\"exampleInputFile\">Image upload</label>\n" +
    "              <input type=\"file\" id=\"exampleInputFile\">\n" +
    "              <p class=\"help-block\">Upload image </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <button  ng-disabled=\"broadcast.$invalid\" type=\"submit\" class=\"btn btn-primary\">Create Channel</button>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "      </div>\n" +
    "    </div><!-- /.modal-content -->\n" +
    "  </div><!-- /.modal-dialog -->\n" +
    "</div><!-- /.modal Ends Here -->\n" +
    "\n" +
    "");
}]);

angular.module("details/details.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/details.html",
    "<body class=\"signup-home\">\n" +
    "    <div class=\"container\">\n" +
    "    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <section class=\"col-md-4\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "              <a class=\"navbar-brand\" href=\"#\">\n" +
    "               Allcast\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </section>\n" +
    "\n" +
    "          <section class=\"col-md-8\">\n" +
    "            <ul class=\"menu\">\n" +
    "              <li><a >Disvover</a></li>\n" +
    "              <li><a >Explore</a></li>\n" +
    "              <li class=\"active\"><a>Welcome, {{user.username}}</a></li>\n" +
    "            </ul>\n" +
    "         </section>\n" +
    "         <div class=\"clear-fix\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </nav>\n" +
    "\n" +
    "    <div class=\"heading-text\">\n" +
    "      <h1>Enjoy Awesomeness</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"page-content\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-6 listen-side\">\n" +
    "            <center>\n" +
    "              <div class=\"img-broadcast\"><img src=\"assets/img/broadcast.png\"></div>\n" +
    "              <div class=\"select-button\">\n" +
    "                <a ui-sref=\"broadcast\"><button type=\"button\">\n" +
    "                  <span>Broadcast</span>\n" +
    "                </button></a>\n" +
    "              </div>\n" +
    "              <p>Broadcast with the world now! Let the world hear your awesomeness</p>\n" +
    "            </center>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-6 broadcast\">\n" +
    "            <center>\n" +
    "              <div class=\"img-listen\"><img src=\"assets/img/listen.png\"></div>\n" +
    "              <div class=\"select-button\">\n" +
    "                <a ui-sref=\"listen\"><button type=\"button\">\n" +
    "                  <span>Listen\n" +
    "                  </span>\n" +
    "                </button></a>\n" +
    "              </div>\n" +
    "              <p>Don't miss the moment, listen live to your favourite channel</p>\n" +
    "            </center>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "<footer ui-view=\"footer\" class=\"choice-footer\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <span class=\"copyright\">Copyright © allcast 2014.</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <ul class=\"list-inline quicklinks\">\n" +
    "          <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "          <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "          <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>");
}]);

angular.module("home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "\n" +
    "           <div class=\"row\">\n" +
    "             <section class=\"col-md-4\">\n" +
    "               <div class=\"navbar-header\">\n" +
    "                 <a class=\"navbar-brand\" ui-sref=\"home\">\n" +
    "                   Allcast\n" +
    "                 </a>\n" +
    "               </div>\n" +
    "             </section>\n" +
    "\n" +
    "             <section class=\"col-md-8\">\n" +
    "               <ul class=\"menu\">\n" +
    "                 <li><a ui-sref=\"home\">Home</a></li>\n" +
    "                 <li><a href=\"#features\" id=\"feature\">Features</a></li>\n" +
    "                 <li><a href=\"#teams\" id=\"team\">Team</a></li>\n" +
    "                 <li><a ui-sref=\"register\">Signup</a></li>\n" +
    "                 <li class=\"active\"><a ui-sref=\"login\">Login</a></li>\n" +
    "               </ul>\n" +
    "             </section>\n" +
    "             <div class=\"clear-fix\"></div>\n" +
    "           </div>\n" +
    "\n" +
    "       </nav>\n" +
    "       <!-- Navigation Ends Here -->\n" +
    "\n" +
    "\n" +
    "       <!-- Background of header starts here -->\n" +
    "\n" +
    "       <header>\n" +
    "         <div class=\"container\">\n" +
    "           <section class=\"intro-text\">\n" +
    "             <h1 class=\"head-text\">Live Audio Stream</h1>\n" +
    "             <p class=\"sub-text\">\n" +
    "              <span class=\"text-inline\">Broadcast</span> from <span class=\"text-inline\">anywhere.</span><br> Let your voice <span class=\"text-inline\">be heard</span> across the globe.<br> All you need is your <span class=\"text-inline\">phone</span> to use our <span class=\"text-inline\">technology</span>\n" +
    "             </p>\n" +
    "             <div class=\"email-collect\">\n" +
    "              <a class=\"sign-up\" ui-sref=\"register\">Start Broadcasting</a>\n" +
    "            </div>\n" +
    "          </section>\n" +
    "        </div>\n" +
    "      </header>\n" +
    "      <!--end of main   -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div ui-view='features' id=\"features\" class=\"features\">\n" +
    "        <section class=\"container\">\n" +
    "          <h1 class=\"text-center section-heading\">Allcast Features</h1>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "              <div class=\"row value-divide\">\n" +
    "                <div class=\"col-md-3 icon-container\">\n" +
    "                  <span class=\"value-icon icon-colorA\"><i class=\"fa fa-microphone\"></i></span>\n" +
    "                  <h4>Let the world hear you</h4>\n" +
    "                  <div class=\"value-text\">\n" +
    "                    <p class=\"text-inline\">Broadcast from anywhere to anywhere on the globe using our simple technology.</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-3 icon-container\">\n" +
    "                 <span class=\"value-icon icon-colorB\"><i class=\"fa fa-share-alt\"></i></span>\n" +
    "                 <h4>Social media integration</h4>\n" +
    "                 <div class=\"value-text\">\n" +
    "                  <p class=\"text-inline\">Share your live audio streams or broadcast with your friends on your social networks of choice.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-md-3 icon-container\">\n" +
    "               <span class=\"value-icon icon-colorC\"><i class=\"fa fa-comments\"></i></span>\n" +
    "               <h4>Engage live with your audience</h4>\n" +
    "               <div class=\"value-text\">\n" +
    "                <p class=\"text-inline\">Chat live with your listeners while you broadcast.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-3 icon-container\">\n" +
    "             <span class=\"value-icon icon-colorD\"><i class=\"fa fa-cogs\"></i></span>\n" +
    "             <h4>Easy customization</h4>\n" +
    "             <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Create your profile and customize your channel, biography, links, artwork and more.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </section>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div ui-view='team' id=\"teams\" class=\"team\">\n" +
    "\n" +
    "    <section class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-12 text-center\">\n" +
    "          <h2 class=\"section-heading\">Our Amazing Team</h2>\n" +
    "          <h3 class=\"text-muted section-subheading\"> Meet the amazing people that made allcast possible.</h3>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"team-member\">\n" +
    "            <center>\n" +
    "              <img src=\"assets/img/Me.png\" class=\"img-responsive img-circle\" alt=\"Team-member-1\">\n" +
    "            </center>\n" +
    "\n" +
    "            <h4>Godwin Abenbire</h4>\n" +
    "            <span class=\"text-muted\">CEO</span>\n" +
    "            <ul class=\"list-inline social-buttons\">\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"team-member\">\n" +
    "            <center>\n" +
    "              <img src=\"assets/img/loret.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-2\">\n" +
    "            </center>\n" +
    "            <h4>Loretta Cobbson</h4>\n" +
    "            <span class=\"text-muted\">Business Lead</span>\n" +
    "            <ul class=\"list-inline social-buttons\">\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"team-member\">\n" +
    "            <center>\n" +
    "              <img src=\"assets/img/Nii.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-3\">\n" +
    "            </center>\n" +
    "            <h4>Kingston Tagoe</h4>\n" +
    "            <span class=\"text-muted\">Product Development</span>\n" +
    "            <ul class=\"list-inline social-buttons\">\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"team-member\">\n" +
    "            <center>\n" +
    "              <img src=\"assets/img/william.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-4\">\n" +
    "            </center>\n" +
    "\n" +
    "            <h4>William Obeng</h4>\n" +
    "            <span class=\"text-muted\">Technical Lead</span>\n" +
    "            <ul class=\"list-inline social-buttons\">\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-8 col-md-offset-2 text-center\">\n" +
    "          <p class=\"team-value\">There is no reason why you should not be heard, we as a team believe in letting all voices count. Our mission is to connect the world through live audio stream so that you don't miss a moment.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pre-footer\" ui-view=\"prefooter\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"main-content\">\n" +
    "        <h2>Let your voice be heard. Broadcast live from anywhere</h2>\n" +
    "      </div>\n" +
    "\n" +
    "      <center>\n" +
    "        <div class=\"sign-up\">\n" +
    "          <p>\n" +
    "            <span class=\"lead-text\">Join the <br>Community</span><br>\n" +
    "          </p>\n" +
    "          <div class=\"signup-btn\">\n" +
    "            <a class=\"signup-link\" href=\"#\">Sign up</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </center>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <footer ui-view=\"footer\">\n" +
    "    <div class=\"container\">\n" +
    "     <div class=\"row\">\n" +
    "       <div class=\"col-md-4\">\n" +
    "         <span class=\"copyright\">Copyright © allcast 2014.</span>\n" +
    "       </div>\n" +
    "       <div class=\"col-md-4\">\n" +
    "         <ul class=\"list-inline quicklinks\">\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "         </ul>\n" +
    "       </div>\n" +
    "       <div class=\"col-md-4\">\n" +
    "         <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    "       </div>\n" +
    "     </div>\n" +
    "   </div>\n" +
    " </footer>\n" +
    " <script type=\"text/javascript\">\n" +
    "   $(window).scroll(function(){\n" +
    "    if ($(window).scrollTop()>100){\n" +
    "      $('.navbar-default').addClass('navbar-color');\n" +
    "    }\n" +
    "    else{\n" +
    "      $('.navbar-default').removeClass('navbar-color');\n" +
    "    };\n" +
    "  });\n" +
    " </script>\n" +
    "");
}]);

angular.module("listen/listen.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("listen/listen.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"container\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"index.html\">Allcast</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "            <div class=\"col-xs-offset-2 col-xs-6\">\n" +
    "                <form class=\"navbar-form\" role=\"search\">\n" +
    "                    <div class=\"input-group search-pane\">\n" +
    "                        <input type=\"text\" class=\"search form-control\" placeholder=\"Search\" name=\"q\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-default\" type=\"submit\" data-toggle=\"dropdown\" data-target=\"#search-dropdown\" autocomplete=\"off\"><i class=\"fa fa-search\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "\n" +
    "                <div id=\"search-dropdown\" class=\"search-dropdown\">\n" +
    "                    <ul class=\"dropdown-menu rs\">\n" +
    "                        <li>\n" +
    "                            <a href=\"#\">Oops, no search results were found.</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li class=\"rs-one\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-xs-3\">\n" +
    "                                        <img class=\"rs-img img-circle\" src=\"assets/img/dashboard/majorie.png\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-9\">\n" +
    "                                        <div class=\"rs-search-name\">Ama Nkansah</div>\n" +
    "                                        <div class=\"rs-search-details\">Telenovela | <strong class=\"live\">LIVE</strong></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                        <li class=\"rs-one\">\n" +
    "                            <a href=\"#\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-xs-3\">\n" +
    "                                        <img class=\"rs-img img-circle\" src=\"assets/img/dashboard/nii.png\">\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-xs-9\">\n" +
    "                                        <div class=\"rs-search-name\">Nii Mantse</div>\n" +
    "                                        <div class=\"rs-search-details\">Big People &amp;... | <strong class=\"live\">LIVE</strong></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><a href=\"#\">Discover</a></li>\n" +
    "                <li><a href=\"#\">Explore</a></li>\n" +
    "                <li class=\"dropdown\">\n" +
    "                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{user.username}} <b class=\"caret\"></b></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a >Settings</a></li>\n" +
    "                        <li><a >Quick links</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a ng-click=\"logout()\">Log out</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"caster-banner\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"broadcaster-profile\">\n" +
    "                    <img src=\"assets/img/dashboard/majorie.png\" class=\"profile-img img-responsive img-circle\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 listening-channel\">\n" +
    "                <div class=\"listening-channel-name\" ng-bind=\"user.userName\"></div>\n" +
    "                <div class=\"category\">Devotion</div>\n" +
    "                <div class=\"broadcast-stats\">\n" +
    "                    <div>1 Listeners</div>\n" +
    "                    <div>0 Followers</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"listener-controls\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <audio id=\"listen_audio\" autoplay >\n" +
    "            </audio>\n" +
    "            <div id=\"mute\" class=\"col-xs-2 nopadding\">\n" +
    "                <div class=\" btn btn-primary mute-button\">\n" +
    "                    Mute\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"countup-timer\">\n" +
    "                    <i class=\"fa fa-volume-up fa-lg\"></i>\n" +
    "                    <small ng-bind=\"soundVolume\"></small>\n" +
    "                    <input id=\"volume\" type=\"range\" type=\"range\" min=\"0\" max=\"10\" step=\"1\" >\n" +
    "                    <div id=\"time\" style=\"display: inline\" ng-bind=\"secs\">00:00:00</div>\n" +
    "\n" +
    "                <small>SEC</small>\n" +
    "                        <canvas id=\"visualizer\" width=\"50\" height=\"15\"></canvas>\n" +
    "\n" +
    "                    <img src=\"assets/img/dashboard/volume_playing_white.gif\" alt=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 display\">\n" +
    "                <i class=\"fa fa-circle\"></i>\n" +
    "                <i id=\"mic\" class=\"fa fa-microphone-slash\"></i>\n" +
    "                <i id=\"mic-on\" class=\"fa fa-microphone\"></i>\n" +
    "                <small class=\"air-display\">LISTENING</small>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2\">\n" +
    "                <div class=\"btn btn-primary follow-button\" title=\"Follow broadcaster\">\n" +
    "                    <i class=\"fa fa-share-alt\"></i>\n" +
    "                    <small> FOLLOW</small>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div><!-- end of .listening-controls -->\n" +
    "\n" +
    "<div class=\"app-widgets\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-3 nopadding-left\">\n" +
    "                <div class=\"caster-bio\">\n" +
    "                    <div class=\"bio-heading\"> DEMO'S BIO</div>\n" +
    "                    <div class=\"bio-body\">\n" +
    "                        <div class=\"col-xs-12\">\n" +
    "                            I was born to love music and enjoy every single moment that it came with.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"links-heading\">LINKS</div>\n" +
    "                    <div class=\"links-body\">\n" +
    "                        <div class=\"col-xs-12 links\">\n" +
    "                            <a href=\"#\">Facebook: /DEMO</a><br/>\n" +
    "                            <a href=\"#\">Google-Plus: +DEMO</a><br/>\n" +
    "                            <a href=\"#\">Twitter: @DEMO</a><br/>\n" +
    "                            <a href=\"#\">AboutMe: /DEMO</a><br/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div> <!-- end of .channel-stats -->\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-7\">\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div class=\"panel-heading\">CHAT</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <ul class=\"media-list\">\n" +
    "                            <li class=\"media\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <div class=\"media\">\n" +
    "                                        <div class=\"text-muted\" >\n" +
    "                                            This channel is yet to see any chats.. Go on and be the first to comment :)\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"media\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <div class=\"media\">\n" +
    "                                        <a class=\"pull-left\" href=\"#\">\n" +
    "                                            <img class=\"media-object img-circle \" src=\"assets/img/dashboard/majorie.png\" />\n" +
    "                                        </a>\n" +
    "                                        <div class=\"media-body\" >\n" +
    "                                            What happened to Jimmy &amp; Wade Wagon. Any releases yet?\n" +
    "                                            <br />\n" +
    "                                            <small class=\"text-muted\">Majorie | 23rd Nov at 5:00pm</small>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"media\">\n" +
    "                                <div class=\"media-body\">\n" +
    "                                    <div class=\"media\">\n" +
    "                                        <a class=\"pull-left\" href=\"#\">\n" +
    "                                            <img class=\"media-object img-circle img-responsive \" src=\"assets/img/dashboard/nii.png\" />\n" +
    "                                        </a>\n" +
    "                                        <div class=\"media-body\" >\n" +
    "                                            Interesting listening to you talk about Afro Blues. Awesome!!!\n" +
    "                                            <br />\n" +
    "                                            <small class=\"text-muted\">Nii Mantse Grid | 23rd Nov at 5:00pm</small>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-footer\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Message\" />\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-info send-btn\" type=\"button\">SEND</button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- </div>  -->\n" +
    "            </div><!-- end of .chat-window -->\n" +
    "            <div class=\"col-xs-2\">\n" +
    "                <a class=\"btn btn-primary btn-block share\" data-toggle=\"modal\" data-target=\"#shareModal\">\n" +
    "                    <i class=\"fa fa-share-alt\"></i> SHARE\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div><!-- end of .app-widgets -->\n" +
    "\n" +
    "<!-- Modal -->\n" +
    "<div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">x</span><span class=\"sr-only\">Close</span></button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-share-alt\"></i> Share</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <h4>Share broadcast link via social media</h4>\n" +
    "                <p>\n" +
    "                    <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a> <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n" +
    "                    <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a> <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a> <a title=\"Reddit\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-reddit fa-stack-1x\"></i></span></a>\n" +
    "                </p>\n" +
    "                <input type=\"week\" name=\"\" value=\"\" placeholder=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
