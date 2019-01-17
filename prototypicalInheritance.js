var human = {
  species:"human",
  create: function(values)
  {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key){
      instance[key] = values[key];
    });
    retrun instance;
  }
  saySpecies:function()
  {
    console.log(this.species);
  },
  sayName:function()
  {
    console.log(this.name);
  }
}

var musician = Object.create(human);
musician.playInstrument = function()
{
  console.log('playing' + this.instrument);
}

var will = Object.create(musician);
will.instrument = "Drums";

will.playInstrument();
