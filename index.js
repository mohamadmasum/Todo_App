require("@snipkode/server");

  ROUTE("GET /", function(){
   this.view("home")
 });

HTTP("debug");