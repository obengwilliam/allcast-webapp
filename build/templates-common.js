angular.module('templates-common', ['security/login/login.html', 'security/register/register.html']);

angular.module("security/login/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/login/login.html",
    "<header class=\"heading\">\n" +
    "      <h1><a href=\"/\">Allcast</a></h1>\n" +
    "    </header>\n" +
    "    <div class=\"main-content\">\n" +
    "      <div class=\"inner\">\n" +
    "        <div class=\"title-text\"><h2>Welcome Back!</h2><hr></div>\n" +
    "        <form>\n" +
    "          <div class=\"text\">\n" +
    "            <span>\n" +
    "              <input type=\"text\" placeholder=\"Username/Email\">\n" +
    "            </span>\n" +
    "          </div>\n" +
    "          <div class=\"text\">\n" +
    "            <span>\n" +
    "              <input type=\"password\" placeholder=\"Password\">\n" +
    "            </span>\n" +
    "          </div>\n" +
    "          <div class=\"check-text\">\n" +
    "            <span class=\"spanA\">\n" +
    "              <input type=\"checkbox\">Remember me\n" +
    "            </span>\n" +
    "            <span class=\"spanB\"><a href=\"#\">Forgot password?</a></span>\n" +
    "          </div>\n" +
    "          <div class=\"button-text\">\n" +
    "            <button><span>Sign in</span></button>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"text-below\"><p>Already have an account? <a href=\"#\">Signin</a></p></div>\n" +
    "    <footer>\n" +
    "      <div class=\"container\">\n" +
    "         <div class=\"row\">\n" +
    "           <div class=\"col-md-4\">\n" +
    "             <ul>\n" +
    "              <li><a href=\"#\">Home</a></li>\n" +
    "            </ul>\n" +
    "           </div>\n" +
    "           <div class=\"col-md-4\">\n" +
    "             <ul class=\"list-inline quicklinks\">\n" +
    "               <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "               <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "               <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "             </ul>\n" +
    "           </div>\n" +
    "           <div class=\"col-md-4\">\n" +
    "             <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "      </div>\n" +
    "    </footer>\n" +
    "");
}]);

angular.module("security/register/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/register/register.html",
    "");
}]);
