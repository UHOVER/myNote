// 字符串

var a = 'aaa';
console.log(a);

//字符串
var str1 = "I'm \"OK\"";
console.log(str1);

// 多行字符
var str2 = `hello
world
test
`;
console.log(str2);

var name = '小明';
var age = 20;
var msg = "你好，"+name+',你今年'+age+'岁了！';
console.log(msg);

var str3 = 'abcdefg';
console.log(str3);
console.log(str3.length);   //7 求字符串长度
console.log(str3[0]);   //a 使用下标获取字符串指定位置的字符
/*字符串是不可变的，如果对字符串的某个索引赋值，不会报任何错误，也没有任何效果 */
str3[1] = 'aaa';
console.log(str3[1]);
str3 = 'hello';
console.log(str3);

//字符串常用方法,这些方法不会改变原有字符串的内容，而是返回一个新的字符串。
console.log(str3.toUpperCase());    // 全部变为大写
var str4 = 'WORLD';
console.log(str4.toLowerCase());    // 全部变为小写
var str5 = 'hello, world';
console.log(str5.indexOf('world'));     //搜索指定字符串出现的位置
console.log(str5.substring(0, 3));  // 返回指定索引区间的子串
console.log(str5.substring(8));     // 从索引8开始到结束
