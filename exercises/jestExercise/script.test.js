let chooseWardrobe = require('./script');
/*
 <54 degrees  “a coat”
54-70 degrees “a jacket”
>70 degrees   “no jacket”

*/
describe("chooseWardrobe", function(){
    test('casual something comfy', function(){
        expect(chooseWardrobe('casual', 30)).toEqual('something comfy and a coat');
    })

    test('semi-formal a polo', function(){
        expect(chooseWardrobe('semi-formal', 54)).toEqual('a polo and a jacket');
    })

    test('formal a suit', function(){
        expect(chooseWardrobe('formal', 71)).toEqual('a suit and no jacket');
    })
})