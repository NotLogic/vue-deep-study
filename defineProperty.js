// Object.defineProperty() 是 Vue不支持IE8及以下的原因之一
    // var obj = {}
    var obj = Object.create(null)
    Object.defineProperty(obj, 'name', {
      value: '啦啦啦',
      writable: true,
      enumerable: true,
      configurable: false,
    })
    for(var key in obj){
      console.log('key: ',key)
    }
    console.log(obj)