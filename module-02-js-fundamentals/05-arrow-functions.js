// this explained simply:

// Regular function:

const obj = {
  name: "Aniruddha",
  greet: function () {
    console.log(this.name); // "Aniruddha"
  }, // this = obj ✅
};

// Arrow function:

const obj2 = {
  name: "Aniruddha",
  greet: () => {
    console.log(this.name); // undefined
  }, // this = window ❌
};

// Simple rule:

// Regular function → this = WHO CALLED IT
// Arrow function   → this = WHERE IT WAS DEFINED
//                           (lexical scope) ✅

// Que :
const obj3 = {
  name: "Aniruddha",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
obj3.greet();

// Arrow function inside setTimeout
// takes 'this' from parent function (greet)
// greet's 'this' = obj
// So this.name = "Aniruddha"
