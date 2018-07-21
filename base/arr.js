// 面试:forEach,for,for in,for of 的区别


// for循环,编程式
let arr = [1,2,3,4,5];
arr.b = '100';
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}
// 1)forEach循环,声明式,不关心如何实现,不能return
arr.forEach(function(item){
    console.log(item)
});
for(let key in arr){ //key会变成会变成字符串,可以遍历除数组以外的值,包括私有属性
    console.log(typeof key)
}
// for of,既能return,值of数组,不能遍历对象
for(let val of arr){
    console.log(val)
}
let obj={school:"asdf",age:8};//可以通过object,keys遍历
// for(let val of obj){
//     console.log(val)
// }
for(let val of Object.keys(obj)){
    console.log(obj[val])
}
// filter()过滤,考虑一个数组方法,要看是否操作原数组,返回结果,回调函数的返回结果
// 2)filter不改变原数组,返回的结果是过滤后的新数组,回调函数返回的结果(如果返回true,表示这一项放到新数组中,false:表示不放到新的数组中)
let newArr = [1,2,3,4,5,6,7,8].filter(function(item){
    return item<6 && item>2
});
console.log(newArr);

// 3),map:将原有的数组映射成一个新数组,[1,2,3]=><li>1<[表情]><li>2<[表情]><li>3<[表情]>
// 不操作原数组,返回新数组,回调函数中返回什么这一项就是什么
let arr1 = [1,2,3].map(function(item){
    return `<li>${item}<[表情]>`
});
console.log(arr1.join(''));

// includes(es5)判断数组是否包含某一项,返回true or false
let arr2 = [1,2,3,4,55];
console.log(arr2.includes(5)); //返回的是bool类型
// find(返回找到的那一项,不会改变原数组),返回true表示找到了,找到后就停止循环,找不到返回的是undefined
let result = arr2.find(function(item,index){ /[表情]到具体的某一项用find
    return item.toString().indexOf(5)>-1
});
console.log(result);

// 6)some,找tr㛑,找到true后停止,返回true,找不到返回false
// 7)every,找false,找到false后停止,返回false
let arr3 = [1,2,3,4];
let result2 = arr3.some(function(item,index){
    return item.toString().indexOf(5)>-1
});
console.log(result2);

// 8)reduce,收敛,4个参数,返回的是叠加后的结果,原数组不发生变化
let arr4 = [1,2,3,4,5,6,7,8,9,10];
let sum = arr4.reduce(function(prev,next,index,item){
    return prev + next
},0);
console.log(sum);

let count = [{price:30,count:2},{price:29,count:9},{price:98,count:4}].reduce(function(prev,next,index,item){
    return prev+next.price*next.count
},0);
console.log(count);

let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next,index,item){
    return prev.concat(next)
});
console.log(flat);









