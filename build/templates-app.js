angular.module('templates-app', ['about/about.html', 'home/home.html']);

angular.module("about/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.html",
    "");
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
    "               <ul class=\"nav nav-pills navbar-right \">\n" +
    "                 <li><a ui-sref=\"home\">Home</a></li>\n" +
    "                 <li><a href=\"#\">Features</a></li>\n" +
    "                 <li><a href=\"#\">Team</a></li>\n" +
    "                 <li><a ui-sref=\"login\">Signin</a></li>\n" +
    "                 <li class=\"active\"><a ui-sref=\"register\">Signup</a></li>\n" +
    "             </ul>\n" +
    "         </section>\n" +
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
    "                 You are <span class=\"text-inline\">Live!</span> Let the world <span class=\"text-inline\">listen<br></span>to your <span class=\"text-inline\">awesomeness.</span> Create a <span class=\"text-inline\">channel</span><br> and enjoy the <span class=\"text-inline\">Allcast experience.</span>\n" +
    "             </p>\n" +
    "             <div class=\"email-collect\">\n" +
    "                <a class=\"sign-up\" href=\"#\">Sign up</a>\n" +
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
