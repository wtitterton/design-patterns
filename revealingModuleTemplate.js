// great for building small libaries of code as you can set public and private access

var myModule = (function(){
  //private functions
  var privateFun = function()
  {
    console.log('private');
  }

  //public function
  var publicFun = function()
  {
    privateFun();
  }

  return {
    publicFun:publicFun
  }
})();
