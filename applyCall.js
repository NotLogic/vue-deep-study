// call 与 apply
    // 定义：
    // apply: 调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法（执行B方法，传参为arguments）
    // call: 调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, arg1, arg2, ...);即A对象应用B对象的方法(执行B方法，传参为arg1,arg2,...)
    // 共同之处：
    // 都可以用来替代另一个对象调用一个方法，将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象（实际上apply和call的功能是一样的，只是传参形式不同）
    // 不同之处：
    // apply: 最多只能有两个参数——新this对象和数组arguments。如果argArray不是一个有效的数组或arguments对象，那么将导致TypeError。如果没有提供argArray和thisObj任何一个参数，那么Global对象将被用作thisObj,并且无法传递任何参数
    // call: 它可以接受多个参数，第一个参数和apply一样，后面是参数列表。这个方法主要用在js对象各方法互相调用的时候，使当前this实例指针保持一致，或者在特殊情况下需要改变this指针。如果没有提供thisObj参数，那么Golbal对象被用作thisObj.
    // 基本用法
    function add(a, b){
      return a + b
    }
    function sub(a, b){
      return a - b
    }
    var a1 = add.apply(sub, [4,2]);  // sub调用add的方法
    var a2 = sub.apply(add, [4,2])
    console.log('a1: ',a1)
    console.log('a2: ',a2)
    var a3 = add.call(sub,4,2)
    var a4 = sub.call(add,4,2)
    console.log('a3: ',a3)
    console.log('a4: ',a4)
    // 实现继承
    function Animal(name){
      this.name = name;
      this.showName = function(){
        console.log(`name: ${this.name}`)
      }
    }
    function Cat(name){
      Animal.apply(this, [name])
      // Animal.call(this, name)
    }
    var cat = new Cat('咕咕');
    cat.showName()
    // 多重继承
    function Class10(){
      this.showSub = function(a, b){
        console.log(`a-b: ${a-b}`)
      }
    }
    function Class11(){
      this.showAdd = function(a, b){
        console.log(`a+b: ${a+b}`)
      }
    }
    function Class12(){
      // Class10.apply(this);
      // Class11.apply(this);
      Class10.call(this);
      Class11.call(this);
    }
    var c2 = new Class12();
    c2.showSub(3, 1)
    c2.showAdd(3, 1)
    // apply的一些其他巧妙用法
    // (1) Math.max可以实现得到数组中最大的一项：
    // 因为Math.max不支持Math.max([param1, param2])也就是数组，但是它支持Math.max(param1, param2...),所以可以根据apply的特点来解决var max = Math.max.apply(null, array),
    // 这样就轻易的可以得到一个数组中的最大项（apply会将一个数组转换为一个参数接一个参数的方式传递给方法）
    // 这块在调用的时候给第一个参数null，这是因为没有对象去调用去调用这个方法，只需要用这个方法运算，得到返回的结果就行，所以直接传递了一个null过去。
    // 用这种方法也可以实现得到数组的最小项: Math.min.apply(null, array)
    // (2) Array.prototype.push可以实现两个数组的合并
    // 同样push方法没有提供push一个数组，但是它提供了push(param1, param2...),同样也可以用apply来转换一些这个数组，即
    var arr1 = new Array('1', '2', '3');
    var arr2 = new Array('4', '5', '6');
    Array.prototype.push.apply(arr1, arr2); // 得到合并后数组的长度，因为push就是返回一个数组的长度
    // 也可以这样理解，arr1调用了push方法，参数时通过apply将数组转换为参数列表的集合
    // 一般在目标函数只需要n个参数列表，而不接收一个数组的形式，可以通过apply的方式巧妙的解决这个问题

