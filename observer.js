// 发布-订阅者模式(又名观察者模式)
let salesOffices = {}  // 售楼处
salesOffices.books = [] // 缓存列表，存放订阅者的回调函数
// 添加订阅者
salesOffices.listen = function(fn){
  this.books.push(fn)
}
salesOffices.trigger = function(){
  // 发布消息
  for(let i=0,fn; (fn = salesOffices.books[i++]);){
    console.log(i,':',fn)

    fn.apply(this, arguments) // arguments 是发布消息的时候带上的参数
  }
}
salesOffices.listen(function(price, squareMeter){
  // 购买者a
  console.log(`价格是： ${price}`)
  console.log(`面积是： ${squareMeter}`)
})
salesOffices.listen(function(price, squareMeter){
  //  购买者b
  console.log(`价格是： ${price}`)
  console.log(`面积是： ${squareMeter}`)
})
salesOffices.trigger(20000, 88);
// salesOffices.trigger(30000, 128);