const Major = require("./Major");

class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  isScholarship(cond) {
    switch (cond) {
      case true:
        return "\nYes, i'm with scholarship";
      case false:
        return "\nNo, i'm without scholarship";
      default:
        return "\nInvalid";
    }
  }

  show() {
    return `Hello, this is ${this.name}! I'm ${
      this.age
    } years old. \nMy major is ${this.major}. Total in my major is ${
      Major[this.major]
    }.`;
  }
}

module.exports = Student;
