angular.module('templates-app', ['about/about.html', 'home/features.html', 'home/footer.html', 'home/header.html', 'home/main.html', 'home/prefooter.html', 'home/team.html']);

angular.module("about/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.html",
    "");
}]);

angular.module("home/features.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/features.html",
    "<div class=\"features\">\n" +
    "     <section class=\"container\">\n" +
    "       <h1 class=\"text-center section-heading\">allcast Features</h1>\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"col-md-12\">\n" +
    "           <ul class=\"feature-set\">\n" +
    "             <li>\n" +
    "               <div class=\"feature-set-image\">\n" +
    "                 <img src=\"assets/img/live5.png\"class=\"img-circle img-responsive\" alt>\n" +
    "             </div>\n" +
    "             <div class=\"feature-set-pane\">\n" +
    "                 <div class=\"pane-heading\">\n" +
    "                   <h4>Feature 1</h4>\n" +
    "               </div>\n" +
    "               <hr class=\"bottom-line\">\n" +
    "\n" +
    "               <div class=\"pane-body\">\n" +
    "                   <p class=\"pane-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n" +
    "               </div>\n" +
    "           </div>\n" +
    "       </li>\n" +
    "\n" +
    "       <li class=\"feature-set-inverted\">\n" +
    "           <div class=\"feature-set-image\">\n" +
    "             <img src=\"assets/img/live5.png\"class=\"img-circle img-responsive\" alt>\n" +
    "         </div>\n" +
    "         <div class=\"feature-set-pane\">\n" +
    "             <div class=\"pane-heading\">\n" +
    "               <h4>Feature 2</h4>\n" +
    "           </div>\n" +
    "           <hr class=\"bottom-line\">\n" +
    "\n" +
    "           <div class=\"pane-body\">\n" +
    "               <p class=\"pane-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n" +
    "           </div>\n" +
    "       </div>\n" +
    "   </li>\n" +
    "\n" +
    "   <li>\n" +
    "       <div class=\"feature-set-image\">\n" +
    "         <img src=\"assets/img/live5.png\"class=\"img-circle img-responsive\" alt>\n" +
    "     </div>\n" +
    "     <div class=\"feature-set-pane\">\n" +
    "         <div class=\"pane-heading\">\n" +
    "           <h4>Feature 3</h4>\n" +
    "       </div>\n" +
    "       <hr class=\"bottom-line\">\n" +
    "\n" +
    "       <div class=\"pane-body\">\n" +
    "           <p class=\"pane-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n" +
    "       </div>\n" +
    "   </div>\n" +
    "</li>\n" +
    "\n" +
    "<li class=\"feature-set-inverted\">\n" +
    "   <div class=\"feature-set-image\">\n" +
    "     <img src=\"assets/img/live5.png\"class=\"fa fa-globe img-circle img-responsive\" alt>\n" +
    " </div>\n" +
    " <div class=\"feature-set-pane\">\n" +
    "     <div class=\"pane-heading\">\n" +
    "       <h4>Feature 4</h4>\n" +
    "   </div>\n" +
    "   <hr class=\"bottom-line\">\n" +
    "\n" +
    "   <div class=\"pane-body\">\n" +
    "       <p class=\"pane-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n" +
    "   </div>\n" +
    "</div>\n" +
    "</li>\n" +
    "\n" +
    "<li class=\"feature-set-inverted\">\n" +
    "   <div class=\"feature-set-image\">\n" +
    "     <img src=\"assets/img/live5.png\"class=\"fa fa-globe img-circle img-responsive\" alt>\n" +
    " </div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "</section>\n" +
    "</div>");
}]);

angular.module("home/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/footer.html",
    "<div class=\"container\">\n" +
    "     <div class=\"row\">\n" +
    "       <div class=\"col-md-4\">\n" +
    "         <span class=\"copyright\">Copyright © allcast 2014.</span>\n" +
    "     </div>\n" +
    "     <div class=\"col-md-4\">\n" +
    "         <ul class=\"list-inline quicklinks\">\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "           <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "       </ul>\n" +
    "   </div>\n" +
    "   <div class=\"col-md-4\">\n" +
    "     <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    " </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("home/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/header.html",
    "");
}]);

angular.module("home/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/main.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "       <div class=\"container\">\n" +
    "         <div class=\"row\">\n" +
    "           <section class=\"col-md-4\">\n" +
    "             <div class=\"navbar-header\">\n" +
    "               <a class=\"navbar-brand\" href=\"#\">\n" +
    "                 allcast\n" +
    "             </a>\n" +
    "         </div>\n" +
    "     </section>\n" +
    "\n" +
    "     <section class=\"col-md-8\">\n" +
    "         <ul class=\"nav navbar-nav navbar-right\">\n" +
    "           <li><a href=\"#\">Home</a></li>\n" +
    "           <li><a href=\"#\">Features</a></li>\n" +
    "           <li><a href=\"#\">Team</a></li>\n" +
    "       </ul>\n" +
    "   </section>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  </nav>\n" +
    "  <!-- Navigation Ends Here -->\n" +
    "\n" +
    "\n" +
    "  <!-- Background of header starts here -->\n" +
    "\n" +
    "  <header>\n" +
    "     <div class=\"container\">\n" +
    "       <section class=\"intro-text\">\n" +
    "         <h1 class=\"head-text\">Live Audio Stream</h1>\n" +
    "         <p class=\"sub-text\">\n" +
    "           Enjoy <span class=\"text-inline\">Live</span> audio stream from\n" +
    "           <span class=\"text-inline\">millions</span> of<br> broadcasters across the            <span class=\"text-inline\">globe</span> on your phone.\n" +
    "       </p>\n" +
    "       <div class=\"email-collect\">\n" +
    "           <p>Get notify when beta is out</p>\n" +
    "           <div class=\"input-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"Drop your email\">\n" +
    "              <span class=\"input-group-btn\">\n" +
    "               <button class=\"btn btn-default\" type=\"button\">Notify!</button>\n" +
    "           </span>\n" +
    "       </div>\n" +
    "   </div>\n" +
    "\n" +
    "   <div class=\"blockSlide-down\">\n" +
    "       <a href=\"#\" id=\"slide-down\"><span>scroll down</span></a>\n" +
    "   </div>\n" +
    "  </section>\n" +
    "  </div>\n" +
    "  </header>\n" +
    "\n" +
    "\n" +
    "<!--end of main   -->");
}]);

angular.module("home/prefooter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/prefooter.html",
    "<div class=\"container\">\n" +
    "     <div class=\"main-content\">\n" +
    "       <h2>Let your voice be heard. Broadcast live from anywhere</h2>\n" +
    "   </div>\n" +
    "\n" +
    "   <center>\n" +
    "     <div class=\"sign-up\">\n" +
    "       <p>\n" +
    "         <span class=\"lead-text\">Join the <br>Community</span><br>\n" +
    "         <span class=\"lead-muted\">Be the first to try our Beta</span>\n" +
    "     </p>\n" +
    "     <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Drop your email\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "       <button class=\"btn btn-default\" type=\"button\">Notify!</button>\n" +
    "   </span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</center>\n" +
    "</div>");
}]);

angular.module("home/team.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/team.html",
    "<section class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12 text-center\">\n" +
    "            <h2 class=\"section-heading\">Our Amazing Team</h2>\n" +
    "            <h3 class=\"text-muted section-subheading\"> Quo ex vitae regione invidunt, cum solum volumus lucilius an, stet gloriatur dissentias ex ius.</h3>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class=\"team-member\">\n" +
    "              <center>\n" +
    "                <img src=\"assets/img/Me.png\" class=\"img-responsive img-circle\" alt=\"Team-member-1\">\n" +
    "              </center>\n" +
    "\n" +
    "              <h4>Godwin Abenbire</h4>\n" +
    "              <span class=\"text-muted\">CEO</span>\n" +
    "              <ul class=\"list-inline social-buttons\">\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "              <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class=\"team-member\">\n" +
    "              <center>\n" +
    "                <img src=\"assets/img/loret.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-2\">\n" +
    "              </center>\n" +
    "              <h4>Lorreta Cobbson</h4>\n" +
    "              <span class=\"text-muted\">Business Lead</span>\n" +
    "              <ul class=\"list-inline social-buttons\">\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class=\"team-member\">\n" +
    "              <center>\n" +
    "                <img src=\"assets/img/Nii.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-3\">\n" +
    "              </center>\n" +
    "              <h4>Kignston Tagoe</h4>\n" +
    "              <span class=\"text-muted\">Product Development</span>\n" +
    "              <ul class=\"list-inline social-buttons\">\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class=\"team-member\">\n" +
    "              <center>\n" +
    "                <img src=\"assets/img/william.jpg\" class=\"img-responsive img-circle\" alt=\"Team-member-4\">\n" +
    "              </center>\n" +
    "\n" +
    "              <h4>William Obeng</h4>\n" +
    "              <span class=\"text-muted\">Technical Lead</span>\n" +
    "              <ul class=\"list-inline social-buttons\">\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "                <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-8 col-md-offset-2 text-center\">\n" +
    "            <p>Nostrud legimus usu in. Quo ex vitae regione invidunt, cum solum volumus lucilius an, stet gloriatur dissentias ex ius.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </section>");
}]);
