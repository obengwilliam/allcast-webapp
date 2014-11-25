angular.module('templates-app', ['about/about.html', 'broadcast/broadcast.html', 'home/home.html', 'listen/listen.html']);

angular.module("about/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.html",
    "");
}]);

angular.module("broadcast/broadcast.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("broadcast/broadcast.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
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
    "            <div class=\"collapse navbar-collapse  navbar-right\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <form class=\"navbar-form\" role=\"search\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\n" +
    "                            <div class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"#\">Discover</a></li>\n" +
    "                    <li><a href=\"#\">Explore</a></li>\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Majorie <b class=\"caret\"></b></a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li><a href=\"#\">Settings</a></li>\n" +
    "                            <li><a href=\"#\">Quick links</a></li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li><a href=\"#\">Log out</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "\n" +
    "    <div id=\"caster-wrapper\">\n" +
    "        <div class=\"container animate\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-10\">\n" +
    "                    <div class=\"channel-details\">\n" +
    "                        <h5 class=\"channel-name\"> MAJORIE</h5>\n" +
    "                        <h6 class=\"channel-category\">Rhythm and Blues</h6>\n" +
    "                    </div>\n" +
    "                </div>\n" +
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
    "    <div class=\"broadcast-controls\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-2 nopadding\">\n" +
    "                    <div class=\"btn btn-primary broadcast-button\"> START BROADCAST </div>\n" +
    "                    <div class=\"btn btn-primary live-button\"> BROADCASTING </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-3 \">\n" +
    "                    <div class=\"countup-timer\">\n" +
    "                        <div id=\"hours\" style=\"display: inline\">00</div> :\n" +
    "                        <div id=\"minutes\" style=\"display:inline\">00</div> :\n" +
    "                        <div id=\"seconds\" style=\"display:inline\">00</div>\n" +
    "                        <small>SEC</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2 display nopadding\">\n" +
    "                    <i class=\"fa fa-circle\"></i>\n" +
    "                    <i id=\"mic\" class=\"fa fa-microphone-slash\"></i>\n" +
    "                    <i id=\"mic-on\" class=\"fa fa-microphone\"></i>\n" +
    "                    <small class=\"air-display\">OFF-AIR</small>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-1 nopadding\">\n" +
    "                    <div class=\"btn btn-primary share-button\" title=\"Share this content\" data-toggle=\"modal\" data-target=\"#shareModal\">\n" +
    "                        <i class=\"fa fa-share-alt\"></i>\n" +
    "                        <small>SHARE</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div><!-- end of .broadcast-controls -->\n" +
    "\n" +
    "    <div class=\"app-widgets\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-8 nopadding\">\n" +
    "                    <div class=\"panel panel-info\">\n" +
    "                        <div class=\"panel-heading\">CHAT</div>\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <ul class=\"media-list\">\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <div class=\"text-muted\" >\n" +
    "                                                This channel is yet to see any chats.. Go on and be the first to comment :)\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <a class=\"pull-left\" href=\"#\">\n" +
    "                                                <img class=\"media-object img-circle \" src=\"assets/img/dashboard/majorie.png\" />\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-body\" >\n" +
    "                                                What happened to Jimmy &amp; Wade Wagon. Any releases yet?\n" +
    "                                                <br />\n" +
    "                                                <small class=\"text-muted\">Majorie | 23rd Nov at 5:00pm</small>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <a class=\"pull-left\" href=\"#\">\n" +
    "                                                <img class=\"media-object img-circle img-responsive \" src=\"assets/img/dashboard/nii.png\" />\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-body\" >\n" +
    "                                                Interesting listening to you talk about Afro Blues. Awesome!!!\n" +
    "                                                <br />\n" +
    "                                                <small class=\"text-muted\">Nii Mantse Grid | 23rd Nov at 5:00pm</small>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"panel-footer\">\n" +
    "                            <div class=\"input-group\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Message\" />\n" +
    "                                <span class=\"input-group-btn\">\n" +
    "                                    <button class=\"btn btn-info send-btn\" type=\"button\">SEND</button>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- </div>  -->\n" +
    "                </div><!-- end of .chat-window -->\n" +
    "                <div class=\"col-xs-3\">\n" +
    "                    <div class=\"channel-stats\">\n" +
    "                        <div class=\"stats-heading\"> CHANNEL STATISTICS</div>\n" +
    "                        <div class=\"stats-body\">\n" +
    "                            <div class=\"col-xs-12\"><i class=\"fa fa-headphones\"></i><a href=\"\"> 428 Listeners</a></div>\n" +
    "                            <div class=\"col-xs-12\"><i class=\"fa fa-heart\"></i><a href=\"\"> 124 Favourites</a></div>\n" +
    "                            <div class=\"col-xs-12\"><i class=\"fa fa-user\"></i><a href=\"\"> 102 Followers</a></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"update-heading\">LATEST UPDATES</div>\n" +
    "                        <div class=\"update-body\">\n" +
    "                            <div class=\"col-xs-12\"><i class=\"fa fa-asterisk\"></i> Sherrie joined your broadcast <small class=\"text-muted\"> 5 secs ago</small></div>\n" +
    "                        </div>\n" +
    "                    </div> <!-- end of .channel-stats -->\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div><!-- end of .app-widgets -->\n" +
    "\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">x</span><span class=\"sr-only\">Close</span></button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-share-alt\"></i> Share</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <h4>Share broadcast link via social media</h4>\n" +
    "                    <p>\n" +
    "                        <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a> <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n" +
    "                        <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a> <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a> <a title=\"Reddit\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-reddit fa-stack-1x\"></i></span></a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <script type=\"text/javascript\">\n" +
    "        $('document').ready(function(){\n" +
    "            $('#mic-on').hide();\n" +
    "            $('.live-button').hide();\n" +
    "\n" +
    "        });\n" +
    "\n" +
    "        $('.broadcast-button').click(function() {\n" +
    "            //show live-button and start timer\n" +
    "            $('.live-button').show();\n" +
    "            $(this).hide();\n" +
    "            $('#mic').hide();\n" +
    "            $('#mic-on').css('color',\"#D50000\");\n" +
    "            $('#mic-on').show();\n" +
    "            $('.fa-circle').css('color',\"#D50000\");\n" +
    "            $('.air-display').text('LIVE');\n" +
    "\n" +
    "        });\n" +
    "\n" +
    "        $('.live-button').click(function(){\n" +
    "            if(confirm(\"Are you sure you want to end your broadcast?\")) {\n" +
    "                $('.broadcast-button').show();\n" +
    "                $(this).hide();\n" +
    "                $('#mic').show();\n" +
    "                $('#mic-on').hide();\n" +
    "                $('.fa-circle').css('color',\"#E0E0E0\");\n" +
    "                $('.air-display').text('OFF-AIR');\n" +
    "\n" +
    "            }\n" +
    "\n" +
    "        });\n" +
    "\n" +
    "        $(document).ready(function() {\n" +
    "          $('#caster-wrapper').particleground({\n" +
    "            dotColor: '#2eceff',\n" +
    "            lineColor: '#2eceff',\n" +
    "            density: 7000\n" +
    "          });\n" +
    "          $('.animate').css({\n" +
    "            'margin-top': -($('.animate').height() / 2)\n" +
    "          });\n" +
    "        });\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </script>");
}]);

angular.module("home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "             <div class=\"container\">\n" +
    "               <div class=\"row\">\n" +
    "                 <section class=\"col-md-4\">\n" +
    "                   <div class=\"navbar-header\">\n" +
    "                     <a class=\"navbar-brand\" href=\"#\">\n" +
    "                       Allcast\n" +
    "                   </a>\n" +
    "               </div>\n" +
    "           </section>\n" +
    "\n" +
    "           <section class=\"col-md-8\">\n" +
    "               <ul class=\"menu\">\n" +
    "                 <li><a ui-sref=\"home\">Home</a></li>\n" +
    "                 <li><a href=\"#\">Features</a></li>\n" +
    "                 <li><a href=\"#\">Team</a></li>\n" +
    "                 <li><a ui-sref=\"register\">Sign Up</a></li>\n" +
    "                 <li class=\"active\"><a ui-sref=\"login\">Sign In</a></li>\n" +
    "             </ul>\n" +
    "         </section>\n" +
    "         <div class=\"clear-fix\"></div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "        </nav>\n" +
    "        <!-- Navigation Ends Here -->\n" +
    "\n" +
    "\n" +
    "        <!-- Background of header starts here -->\n" +
    "\n" +
    "        <header>\n" +
    "           <div class=\"container\">\n" +
    "             <section class=\"intro-text\">\n" +
    "               <h1 class=\"head-text\">Live Audio Stream</h1>\n" +
    "               <p class=\"sub-text\">\n" +
    "                 <span class=\"text-inline\"></span>Broadcast to the world from <span class=\"text-inline\">anywhere.</span><br> Let your voice <span class=\"text-inline\">be heard</span> across the globe.<br> Our technology is <span class=\"text-inline\">easy</span> to use,<br> all you need is your <span class=\"text-inline\">phone.</span>\n" +
    "             </p>\n" +
    "             <div class=\"email-collect\">\n" +
    "                <a class=\"sign-up\" ui-sref=\"register\">Start Broadcasting</a>\n" +
    "              </div>\n" +
    "        </section>\n" +
    "        </div>\n" +
    "        </header>\n" +
    "      <!--end of main   -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div ui-view='features' class=\"features\">\n" +
    "  <section class=\"container\">\n" +
    "    <h1 class=\"text-center section-heading\">Allcast Features</h1>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-4 icon-container-a\">\n" +
    "            <span class=\"value-icon\"><i class=\"fa fa-microphone\"></i></span>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <h4>Let the world hear you</h4><hr>\n" +
    "            <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Broadcast to the world from anywhere. Let your voice be heard by millions across the globe. Our technology is easy to use, all you need is your phone.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-4 icon-container\">\n" +
    "             <span class=\"value-icon\"><i class=\"fa fa-share-alt\"></i></span>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-8 feature-set\">\n" +
    "            <h4>Social media intergration</h4><hr>\n" +
    "            <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Share your live audio streams or broadcast with your friends on the various social networks. Your followers can listen live on their social Network.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-4 icon-container\">\n" +
    "             <span class=\"value-icon\"><i class=\"fa fa-comments\"></i></span>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-8 feature-set\">\n" +
    "            <h4>Enagage live with your audience</h4><hr>\n" +
    "            <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Interact directly with your listeners as you broadcast, through live chat. Give your listeners the experience they deserve, they love listening to you and want you to know it.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-4 icon-container-a\">\n" +
    "             <span class=\"value-icon\"><i class=\"fa fa-cogs\"></i></span>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <h4>Easy customization</h4><hr>\n" +
    "            <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Personalize your own channel, biography, links, artwork and more. Create your own profile the way you like it.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-4 icon-container\">\n" +
    "             <span class=\"value-icon\"><i class=\"fa fa-group\"></i></span>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-8 feature-set\">\n" +
    "            <h4>Enjoy variety</h4><hr>\n" +
    "            <div class=\"value-text\">\n" +
    "              <p class=\"text-inline\">Never miss a single moment when people share their hearts with you. Discover a variety of channels from broadcasters. listen,chat and follow any channel of your choosing. </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    " </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ui-view='team' class=\"team\">\n" +
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
    "            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"team-member\">\n" +
    "            <center>\n" +
    "              <img src=\"assets/img/loret.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-2\">\n" +
    "            </center>\n" +
    "            <h4>Lorreta Cobbson</h4>\n" +
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
    "</div>\n" +
    "\n" +
    "<div class=\"pre-footer\" ui-view=\"prefooter\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"main-content\">\n" +
    "        <h2>Let your voice be heard. Broadcast live from anywhere</h2>\n" +
    "      </div>\n" +
    "\n" +
    "      <center>\n" +
    "        <div class=\"sign-up\">\n" +
    "          <p>\n" +
    "            <span class=\"lead-text\">Join the <br>Community</span><br>\n" +
    "         </p>\n" +
    "          <div class=\"signup-btn\">\n" +
    "            <a class=\"signup-link\" href=\"#\">Sign up</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </center>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<footer ui-view=\"footer\">\n" +
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
    "    </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("listen/listen.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("listen/listen.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
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
    "            <div class=\"collapse navbar-collapse  navbar-right\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                <div class=\"col-sm-6 col-md-6\">\n" +
    "                    <form class=\"navbar-form\" role=\"search\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\n" +
    "                            <div class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"#\">Discover</a></li>\n" +
    "                    <li><a href=\"#\">Explore</a></li>\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Majorie <b class=\"caret\"></b></a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li><a href=\"#\">Settings</a></li>\n" +
    "                            <li><a href=\"#\">Quick links</a></li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li><a href=\"#\">Log out</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div><!-- /.navbar-collapse -->\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "\n" +
    "    <div class=\"caster-banner\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div class=\"broadcaster-profile\">\n" +
    "                        <img src=\"assets/img/dashboard/majorie.png\" class=\"profile-img img-responsive img-circle\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6 listening-channel\">\n" +
    "                    <div class=\"listening-channel-name\">Majorie</div>\n" +
    "                    <div class=\"category\">Rhythm &amp; Blues</div>\n" +
    "                    <div class=\"broadcast-stats\">\n" +
    "                        <div>42 Listeners</div>\n" +
    "                        <div>42 Followers</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"listener-controls\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-2 nopadding\">\n" +
    "                    <div class=\"btn btn-primary mute-button\"> MUTE CAST </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div class=\"countup-timer\">\n" +
    "                        <div id=\"hours\" style=\"display: inline\">00</div> :\n" +
    "                        <div id=\"minutes\" style=\"display:inline\">00</div> :\n" +
    "                        <div id=\"seconds\" style=\"display:inline\">00</div>\n" +
    "                        <small>SEC</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2 display\">\n" +
    "                    <i class=\"fa fa-circle\"></i>\n" +
    "                    <i id=\"mic\" class=\"fa fa-microphone-slash\"></i>\n" +
    "                    <i id=\"mic-on\" class=\"fa fa-microphone\"></i>\n" +
    "                    <small class=\"air-display\">OFF-AIR</small>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                    <div class=\"btn btn-primary follow-button\" title=\"Follow broadcaster\">\n" +
    "                        <i class=\"fa fa-share-alt\"></i>\n" +
    "                        <small> FOLLOW</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div><!-- end of .listening-controls -->\n" +
    "\n" +
    "\n" +
    "    <div class=\"app-widgets\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-3 nopadding-left\">\n" +
    "                    <div class=\"caster-bio\">\n" +
    "                        <div class=\"bio-heading\"> MAJORIE'S BIO</div>\n" +
    "                        <div class=\"bio-body\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                I was born to love music and enjoy every single moment that it came with.\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"links-heading\">LINKS</div>\n" +
    "                        <div class=\"links-body\">\n" +
    "                            <div class=\"col-xs-12 links\">\n" +
    "                                <a href=\"#\">Facebook: /Majorie</a><br/>\n" +
    "                                <a href=\"#\">Google-Plus: +Majorie</a><br/>\n" +
    "                                <a href=\"#\">Twitter: @Majorie</a><br/>\n" +
    "                                <a href=\"#\">AboutMe: /Majorie</a><br/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div> <!-- end of .channel-stats -->\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-xs-7\">\n" +
    "                    <div class=\"panel panel-info\">\n" +
    "                        <div class=\"panel-heading\">CHAT</div>\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <ul class=\"media-list\">\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <div class=\"text-muted\" >\n" +
    "                                                This channel is yet to see any chats.. Go on and be the first to comment :)\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <a class=\"pull-left\" href=\"#\">\n" +
    "                                                <img class=\"media-object img-circle \" src=\"assets/img/dashboard/majorie.png\" />\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-body\" >\n" +
    "                                                What happened to Jimmy &amp; Wade Wagon. Any releases yet?\n" +
    "                                                <br />\n" +
    "                                                <small class=\"text-muted\">Majorie | 23rd Nov at 5:00pm</small>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                                <li class=\"media\">\n" +
    "                                    <div class=\"media-body\">\n" +
    "                                        <div class=\"media\">\n" +
    "                                            <a class=\"pull-left\" href=\"#\">\n" +
    "                                                <img class=\"media-object img-circle img-responsive \" src=\"assets/img/dashboard/nii.png\" />\n" +
    "                                            </a>\n" +
    "                                            <div class=\"media-body\" >\n" +
    "                                                Interesting listening to you talk about Afro Blues. Awesome!!!\n" +
    "                                                <br />\n" +
    "                                                <small class=\"text-muted\">Nii Mantse Grid | 23rd Nov at 5:00pm</small>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"panel-footer\">\n" +
    "                            <div class=\"input-group\">\n" +
    "                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Message\" />\n" +
    "                                <span class=\"input-group-btn\">\n" +
    "                                    <button class=\"btn btn-info send-btn\" type=\"button\">SEND</button>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- </div>  -->\n" +
    "                </div><!-- end of .chat-window -->\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                    <a class=\"btn btn-primary btn-block share\" data-toggle=\"modal\" data-target=\"#shareModal\">\n" +
    "                        <i class=\"fa fa-share-alt\"></i> SHARE\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div><!-- end of .app-widgets -->\n" +
    "\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">x</span><span class=\"sr-only\">Close</span></button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-share-alt\"></i> Share</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <h4>Share broadcast link via social media</h4>\n" +
    "                    <p>\n" +
    "                        <a title=\"Facebook\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-facebook fa-stack-1x\"></i></span></a> <a title=\"Twitter\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x\"></i></span></a>\n" +
    "                        <a title=\"Google+\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-google-plus fa-stack-1x\"></i></span></a> <a title=\"Linkedin\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x\"></i></span></a> <a title=\"Reddit\" href=\"\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-square-o fa-stack-2x\"></i><i class=\"fa fa-reddit fa-stack-1x\"></i></span></a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "");
}]);
