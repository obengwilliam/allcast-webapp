angular.module('templates-common', ['security/login/login.html', 'security/register/register.html']);

angular.module("security/login/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/login/login.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    " <div class=\"container\">\n" +
    "   <div class=\"row\">\n" +
    "     <section class=\"col-md-4\">\n" +
    "       <div class=\"navbar-header\">\n" +
    "         <a class=\"navbar-brand\" href=\"#\">\n" +
    "           Allcast\n" +
    "         </a>\n" +
    "       </div>\n" +
    "     </section>\n" +
    "\n" +
    "     <section class=\"col-md-8\">\n" +
    "       <ul class=\"menu\">\n" +
    "         <li><a ui-sref=\"home\">Home</a></li>\n" +
    "         <li><a ui-sref=\"register\">Sign Up</a></li>\n" +
    "         <li class=\"active\"><a ui-sref=\"login\">Sign In</a></li>\n" +
    "       </ul>\n" +
    "     </section>\n" +
    "   </div>\n" +
    " </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"main-content\">\n" +
    "  <div class=\"inner\">\n" +
    "    <div class=\"title-text\"><h2>Welcome Back!</h2><hr></div>\n" +
    "    <form role=\"form\" name='login' ng-submit=\"signIn(credentials)\" novalidate>\n" +
    "      <span class=\"text-danger\" ng-show=\"authError\">{{authError}}!</span>\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input name=\"username\" type=\"text\" placeholder=\"Username\" ng-model=\"credentials.username\" required>\n" +
    "        </span>\n" +
    "        <span ng-show=\"login.username.$dirty && login.username.$invalid\">\n" +
    "          <span class=\" text-center text-danger\" ng-show=\"login.username.$error.required\">Username is required\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input name=\"password\" type=\"password\" placeholder=\"Password\" ng-model=\"credentials.password\" required>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-show=\"login.password.$dirty && login.password.$invalid\">\n" +
    "          <span class=\" text-center text-danger\" ng-show=\"login.password.$error.required\"> Password is required</span>\n" +
    "          <span class=\" text-center text-danger\" ng-show=\"login.password.$error.password\">Invalid Password</span>\n" +
    "        </span>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"check-text\">\n" +
    "        <span class=\"spanA\">\n" +
    "          <input type=\"checkbox\">Remember me\n" +
    "        </span>\n" +
    "        <span class=\"spanB\"><a href=\"#\">Forgot password?</a></span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"button-text\">\n" +
    "        <button ng-disabled=\"login.$invalid\" type=\"submit\"><span >Sign in</span></button>\n" +
    "      </div>\n" +
    "\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"text-below\"><p>Don't have an account? <a href=\"#\">Signup</a></p></div>\n" +
    "<footer>\n" +
    "  <div class=\"container\">\n" +
    "   <div class=\"row\">\n" +
    "     <div class=\"col-md-4\">\n" +
    "        <span class=\"copyright\">Copyright © Allcast 2014.</span>\n" +
    "      </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "     <ul class=\"list-inline quicklinks\">\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "     </ul>\n" +
    "   </div>\n" +
    "   <div class=\"col-md-4\">\n" +
    "     <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    "   </div>\n" +
    " </div>\n" +
    "</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("security/register/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/register/register.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    " <div class=\"container\">\n" +
    "   <div class=\"row\">\n" +
    "     <section class=\"col-md-4\">\n" +
    "       <div class=\"navbar-header\">\n" +
    "         <a class=\"navbar-brand\" href=\"#\">\n" +
    "           Allcast\n" +
    "         </a>\n" +
    "       </div>\n" +
    "     </section>\n" +
    "\n" +
    "     <section class=\"col-md-8\">\n" +
    "       <ul class=\"menu\">\n" +
    "         <li><a ui-sref=\"home\">Home</a></li>\n" +
    "         <li><a ui-sref=\"register\">Sign Up</a></li>\n" +
    "         <li class=\"active\"><a ui-sref=\"login\">Sign In</a></li>\n" +
    "       </ul>\n" +
    "     </section>\n" +
    "     <div class=\"clear-fix\"></div>\n" +
    "   </div>\n" +
    " </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"main-content\">\n" +
    "  <div class=\"inner\">\n" +
    "    <div class=\"title-text\"><h2>Create an account</h2><hr></div>\n" +
    "    <form name=\"register\" ng-submit=\"signUp(credentials)\"invalidate>\n" +
    "      <span class=\"text-center text-danger\" ng-bind=\"authError\"></span>\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input type=\"text\" name=\"username\" ng-model=\"credentials.username\"placeholder=\"Username\" required>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-show=\"register.username.$dirty && register.username.$invalid\">\n" +
    "          <span class=\"text-center text-danger\" ng-show=\"register.username.$error.required\" >Oops! Please enter your username</span>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input type=\"text\" name=\"firstname\" ng-model=\"credentials.firstname\"placeholder=\"First Name\" required>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-show=\"register.firstname.$dirty && register.firstname.$invalid\">\n" +
    "          <span class=\"text-center text-danger\" ng-show=\"register.firstname.$error.required\" >Oops! Please enter your firstname</span>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input type=\"text\" name=\"lastname\" ng-model=\"credentials.lastname\"placeholder=\"Last Name\" required>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-show=\"register.lastname.$dirty && register.lastname.$invalid\">\n" +
    "          <span class=\"text-center text-danger\" ng-show=\"register.lastname.$error.required\" >Oops! Please enter your lastname</span>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input type=\"email\" name=\"email\" placeholder=\"Email\" ng-model=\"credentials.email\" required>\n" +
    "        </span>\n" +
    "        <span ng-show=\"register.email.$dirty && register.email.$invalid\">\n" +
    "          <span class=\" text-center text-danger\" ng-show=\"register.email.$error.email\"> Invalid Email</span>\n" +
    "          <span class=\" text-center text-danger\" ng-show=\"register.email.$error.required\" >Please enter your email</span>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"text\">\n" +
    "      <span>\n" +
    "        <input type=\"password\" placeholder=\"Password\" name=\"password\" ng-model=\"credentials.password\" ng-minlength=\"8\" ng-maxlength=\"20\" ng-class=\"{'ng-invalid':register.confirmPassword.$error.match}\"required>\n" +
    "      </span>\n" +
    "      <span ng-show=\"register.password.$dirty && register.password.$invalid\">\n" +
    "        <span class=\"text-center text-danger\" ng-show=\"register.password.$error.password\">Invalid Password </span>\n" +
    "\n" +
    "        <span class=\"text-center text-danger\" ng-show=\"register.password.$error.required\">Please enter your password</span>\n" +
    "\n" +
    "        <span class=\"text-center text-danger\" ng-show=\"!register.password.$error.required && (register.password.$error.minlength || register.password.$error.maxlength)\">Passwords must be between 8 and 20 characters.</span>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"text\">\n" +
    "        <span>\n" +
    "          <input type=\"password\" placeholder=\"Confirmed Password\" name=\"confirmPassword\" ng-model=\"credentials.passwordConfirmation\" match=\"credentials.password\" required>\n" +
    "        </span>\n" +
    "        <span ng-show=\"register.confirmPassword.$dirty && register.confirmPassword.$invalid\">\n" +
    "          <span ng-show=\"register.confirmPassword.$error.match\" class=\"text-danger text-center\">Passwords do not match!</span>\n" +
    "          <span class=\"text-center text-danger\" ng-show=\"register.confirmPassword.$error.confirmPassword\">Invalid Password</span>\n" +
    "          <span class=\"text-center text-danger\" ng-show=\"register.confirmPassword.$error.required\" >Please confirm your password</span>\n" +
    "        </span>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"button-text\">\n" +
    "        <button ng-disabled=\"register.$invalid\" type=\"submit\"><span>Create an account</span></button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"text-below\"><p>Already have an account? <a href=\"#\">Signin</a></p></div>\n" +
    "<footer>\n" +
    "  <div class=\"container\">\n" +
    "   <div class=\"row\">\n" +
    "     <div class=\"col-md-4\">\n" +
    "         <span class=\"copyright\">Copyright © Allcast 2014.</span>\n" +
    "      </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "     <ul class=\"list-inline quicklinks\">\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "       <li><a href=\"#\"><i class=\"fa fa-google\"></i></a></li>\n" +
    "     </ul>\n" +
    "   </div>\n" +
    "   <div class=\"col-md-4\">\n" +
    "     <span class=\"sub-text\">Made with <i class=\"fa fa-heart\"></i> and <i class=\"fa fa-coffee\"></i> by Bolt Lab. Solutions</span>\n" +
    "   </div>\n" +
    " </div>\n" +
    "</div>\n" +
    "</footer>");
}]);
