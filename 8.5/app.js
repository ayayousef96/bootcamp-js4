function swap_objects(obj){
    var ret = {};
    for(var key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }

  let o={A : 1, B : 2, C : 3, D : 4};
  console.log(swap_objects(o));