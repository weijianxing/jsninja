/**
 * 加法，即是将多个数值逐个累加
 */
exports.sum = (...args) => {
    let res = 0
    for (let i of args) {
      res += i
    }
    return res
  }
  
  /**
   * 乘法，即是将b个重复的数值a，进行累加
   */
  exports.times = (a, b) => {
    let resArr = (new Array(b)).fill(a)
    return exports.sum(...resArr)
  }

  exports.mutiMax=(fist, ...remainnumbers)=>{
    var sort = remainnumbers.sort(function (a,b){
      return b - a;
    });
    return fist * sort[0]
  }

  exports.thisdef= (a)=>{
    a += 1
    // return this;
    return a;
}