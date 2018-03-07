// 数组

var arr1 = [1, 2, 3, 'hello', false];
console.log(arr1);
console.log(arr1.length);
arr1.length = 7;
arr1.length = 2;    // 给长度赋值会改变数组长度
console.log(arr1);
arr1[1] = 100;
console.log(arr1);
arr1[4] = 'world';  // 下标越界同样会改变数组的长度
console.log(arr1);

console.log(arr1.indexOf(100));     // 获取指定元素的索引
console.log(arr1.indexOf('haaa'));     // 未找到则返回-1

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(0, 2));  // 截取下标从0开始到2的元素并返回
console.log(arr2.slice(2));     // 截取下标从2开始到结束的元素并返回
console.log(arr2.slice());  //截取所有元素，可利用复制一个数组

// push pop

console.log(arr2.push(6, 7));   //向数组末尾添加若干元素，返回数组新的长度
console.log(arr2.pop());    // 删除数组末尾的元素，返回被删除的元素

var arr3 = [];
console.log(arr3.pop());
/**空数组pop不会报错，而是返回undefined */

// unshift shift
var arr4 = ['a', 'b', 'c', 'd'];
console.log(arr4.unshift('test', 1));   // 返回数组新的长度
console.log(arr4);
console.log(arr4.shift());  //把数组的第一个元素删掉,返回被删除的元素

var arr3 = [];
console.log(arr3.pop());
console.log(arr3.shift());
/**空数组pop, shift不会报错，而是返回undefined */

console.log(arr4.sort());   // 排序
console.log(arr4.reverse());    // 反转

// splice array的万能方法
console.log(arr4.splice(2, 3, 'hello', 'world'));   //从索引2开始删除3个元素,然后再添加两个元素
console.log(arr4.splice(2,2));      //从索引2开始删除两个元素，不添加
console.log(arr4.splice(2,0,'test1', 'test2'));     // 从索引2开始添加两个元素，不删除

var arr5 = [1,2,3];
var arr6 = ['a', 'b', 'c'];
console.log(arr5.concat(arr6));     // 把两个数组连接起来返回新的数组
console.log(arr6.concat(arr5));     
console.log(arr5.concat('test', 10, [11, 12]));
console.log(arr5.join('**'));   // 将数组的每个元素用指定的符号连接起来返回一个字符串，如果元素不是字符串，则转换成字符串再连接

var arr7 = ['test1', [1,2,3,['hello', 'world']]];   //多维数组
console.log(arr7);
















