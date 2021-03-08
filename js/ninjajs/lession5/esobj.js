class Ninja{
    constructor(name) {
        this.name = name
    }
    swingsword(){
        return true
    }
}
// referfore by other js should exports this content and used by const {Ninja} =  require("./esobj")

exports.Ninja = Ninja;

// var ninja = new Ninja("tester")
// console.log(ninja.name)
// console.log(ninja.swingsword())