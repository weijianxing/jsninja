const directory  = new Map();
directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 277 46");

// for (let item of directory){
//     console.log(item[0]);
//     console.log(item[1]);
// }

// for(let key of directory.keys()){
//     console.log(key);
//     console.log(directory.get(key));
// }

function isThisAZipCode(candidate) {
    return /^\d{5}-\d{4}$/.test(candidate);
}

const pattern = new RegExp("test",'ig')

// modue code in  es6
const MouseCounterModule = function(){
    let numClicks = 0;
    const handleClick = () => {
    alert(++numClicks);
    };
    return {
    countClicks: () => {
    document.addEventListener("click", handleClick);
    }
    };
    }();


test('reg RegExp  ',()=>{
    expect(pattern.test("teSTabc")).toBe(true)
  })


test('ninja object ',()=>{
    expect(directory.get("Yoshi")).toBe('+81 26 6462')
  })

  test('reg express positive ',()=>{
    expect(isThisAZipCode("66666-22222")).toBe(false)
  })

  test('reg express negative ',()=>{
    expect(isThisAZipCode("66666-2222")).toBe(true)
  })