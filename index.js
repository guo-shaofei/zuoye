module.exports = {


    /**
     * 统计数组中每个字符串出现次数
     * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
     * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
     */
    frequencyMap: strs => {
      //TODO your code goes here..
      
    },

    func1:(arr)=>{
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
    /**
     * 请处理给定字符串:
     *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
     *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
     * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
     * @return str: 例 "I'm driving to Beijing after breakfast "
     */
    decode: str => {
      //TODO your code goes here...
      
    },
    func2:(str)=>{
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
    /**
     * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
     * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
     * @return int: 需要的会议室的个数, 例 1
     * 另一个测试用例: [[10,20], [19,30]] => 2
     */
    minRequiredMeetingsRooms: meetings => {
      //TODO your code goes here...
    
          return null
    },
    /**
     * 部门安排所有组合
     * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
     *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
     * @param required_department: dict, 该任务需要参与的部门和需要的人数
     *   例 {'frontend': 2, 'backend': 1}
     * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
     */
    staffCombinations: (department_staff_dict, required_staff) => {
      //TODO your code goes here...
      return null;
    },
    /**
     * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
     * @param num1 加数, 字符串, 例 '123456789123456789'
     * @param num2 加数, 字符串, 例 '987654321987654321'
     * @return 和, 例             '1111111111111111110'
     */
    addStrings: (num1, num2) => {
      
    },
  }
  