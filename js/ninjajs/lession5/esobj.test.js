const {Ninja} =  require("./esobj")

var ninja = new Ninja("tester");

// console.log(ninja.swingsword())
// console.log(ninja.name)
const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi" },
    {name: "Kuma", weapon: "wakizashi"}
    ];

    const ninjawithwakizashi = ninjas.find(nj=>{
        return nj.weapon === "wakizashi";
    });

    // console.log(ninjawithwakizashi.name)
    console.log(ninjas.find(nin=>nin.weapon === 'wakizashi'))
    console.log(ninjas.filter(nin=> 'weapon' in nin))
    const elems = {
        length: 0,
        add: function (elem) {
            Array.prototype.push.call(this,elem);
        },
        gather: function(id){
            this.add(id);
        },
        find: function(callback){
            return Array.prototype.find.call(this, callback);
        }
    }
elems.gather(1)
// elems.gather(2)

test("array test : ", ()=>{
    expect(elems.length).toBe(1)
})
test('ninja object ',()=>{
    expect(ninja.name).toBe('tester')
  })
  
// console.log(ninja.name)
// console.log(ninja.swingsword())