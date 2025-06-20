let abc = {
  name: "Tamil",
  age: 25,
  city: "Chennai",
  greet: function() {
    console.log("Hello, I’m " + this.name + " My age : " + this.age);
  }
};
abc.greet();