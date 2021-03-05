const { TestScheduler } = require("jest");

function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
    result += arguments[n];
    }
    this.result = result;
    }

    var ninja1 = {};
    var ninja2 = {};
    // apply is input parameters list
    // call is input parameters array
    juggle.apply(ninja1,[1,2,3,4]);
    juggle.call(ninja2, 5,6,7,8);

    test('test ', ()=>{
        expect(ninja1.result).toBe(10)
    })