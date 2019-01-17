
var Plugin = (function(){
  // constructor for plugin
  this.Plugin = function()
  {

  }

  // Define option defaults
  var defaults = {

  }
  // check if argument passed is of type object
  if (arguments[0] && typeof arguments[0] === "object")
  {
    this.options = extendDefaults(defaults, arguments[0]);
  }

  function extendDefaults(source, properties)
  {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  // private function
  var privateFunct = function()
  {
    // example private function
  }
  //public function
  Plugin.prototype.publicFunc = function()
  {
    //example puclic function
  }

})();
