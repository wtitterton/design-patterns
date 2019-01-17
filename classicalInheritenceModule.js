//classical prototypal
function inherits(ctor, superCtor) {
 ctor.super_ = superCtor;
 ctor.prototype = Object.create(superCtor.prototype, {
   constructor: {
     value: ctor,
     enumerable: false,
     writable: true,
     configurable: true
   }
 });
};

var Person = function(name)
{
  this.name = name;
}

Person.prototype.sayName = function()
{
  alert(this.name);
}

var jhon = new Person("jhon");

jhon.sayName();

var Musician = function(name,instrument)
{
  Musician.super_.call(this,name); // call person and bind context and pass name as a paramater to person constructor
  this.instrument = instrument;
}
inherits(Musician, Person);
Musician.prototype.playInstrument = function()
{
  alert('dsnknsdcslksl');
}
var julie = new Musician('julia', "drums");
julie.sayName();
julie.playInstrument();
