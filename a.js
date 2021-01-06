//统计数组中每个字符串出现次数
function func1(arr){
    var newArr = [];
    while(arr.length>0){
        var index = arr.lastIndexOf(arr[0]);
        // console.log(arr[index])
        newArr.push(arr.splice(0,index+1))
    }
    var result = {}
    for(var i=0;i<newArr.length;i++){
        result[newArr[i][0]]=newArr[i].length
    }
    return result
}
console.log(func1(['aa', 'ab', 'ab', 'cc', 'cba']))   //{ aa: 1, ab: 2, cc: 1, cba: 1 }

//请处理给定字符串:
//*   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
//*   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格

function func2(str){
    //匹配中文字符的正则表达式： [\u4e00-\u9fa5]
    // let reg = new RegExp('[\u4e00-\u9fa5]+$','g')
    var arr1=str.match(/[0-9\u4e00-\u9fa5]/g);
    //console.log(arr1) //['我', '我', '我','是', '乱', '乱','码', '8',  '8']
    var arr2 = []
    while(arr1.length>0){
        var index = arr1.lastIndexOf(arr1[0]);
        arr2.push(arr1.splice(0,index+1).join('')+'')  //[ '我我我', '是', '乱乱', '码', '88' ]
        // console.log(arr2)
    }
    for(var i=0;i<arr2.length;i++){
        str = str.replace(arr2[i],' ')
    }
    return str
}
console.log(func2("I'm我我我driving是to乱乱Beijing码after breakfast88"))  //I'm driving to Beijing after breakfast

//会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
function func3(arr){
    var arr1 = [];
    var arr2 = [];
    for(var i=0;i<arr.length;i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
        arr1.sort((a,b)=>{return a-b});
        arr2.sort((a,b)=>{return a-b});
        console.log(arr1,arr2)
    }
    var count = 0;
    // for(var j=0;j<arr1.length;j++){
    //     for(var j=0;j<arr2.length;j++){
    //         if(arr1[i]<arr2[j])
    //         console.log(arr1[i],arr2[j])
    //     }
      
    // }
    return count;
}
// func3([[10, 20], [20, 30]])
func3([[10,20], [19,30],[5,11]])
// console.log(func3([[10, 20], [20, 30],[5,11]]))

//大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加