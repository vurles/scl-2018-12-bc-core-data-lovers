global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');


//const country = ['PER'];
//const ind = ['SL.TLF.PART.FE.ZS']
//var countries = {
//	"PER": {
//		"name" : "Peru",
//		"indicator" : "SL.TLF.PART.FE.ZS"
//		},
//	"CHI": {
//		"name" : "Peru",
//		"indicator" : "SL.TLF.PART.FE.ZS"
//		},
//};

var myfunc = function getCountryIndicator(code)
{
	return countries[code]["indicator"];
}

var countries = {
	"PER": {
		"name" : "Peru",
		"indicator" : "SL.TLF.PART.FE.ZS"
		},
	"CHI": {
		"name" : "Peru",
		"indicator" : "SL.TLF.PART.FE.ZS"
		},
};

describe(myfunc, () => {
  it('is a function', () => {
    expect(typeof myfunc).toBe('function');
  });

  it('returns `PER`', () => {
    expect(myfunc("PER")).toBe('SL.TLF.PART.FE.ZS');
  });
});
