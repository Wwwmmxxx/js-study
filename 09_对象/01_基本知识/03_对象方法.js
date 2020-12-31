let lisi = {
  name: "李四",
  age: 22,
  grade: {
    math: 99,
    english: 67
  },
  //平均成绩
  avgGrade: function () {
    let total = 0;
    for (const key in this.grade) {
      total += this.grade[key];
    }
    return total / this.propertyCount("grade");
  },
  //获取属性数量
  propertyCount: function (property) {
    let count = 0;
    for (const key in this[property]) count++;
    return count;
  }
};
console.log(lisi.avgGrade());