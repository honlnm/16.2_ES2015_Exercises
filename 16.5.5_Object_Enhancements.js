//In this exercise, you'll refactor some ES5 code into ES2015. Write your code in the sections with a comment to "Write an ES2015 Version".

//Same Keys and values
//function createInstructor(firstName, lastName){
//    return {
//      firstName: firstName,
//      lastName: lastName
//    }
//  }

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
};

//Computed Property Names
//var favoriteNumber = 42;
//
//var instructor = {
//  firstName: "Colt"
//}
//
//instructor[favoriteNumber] = "That is my favorite!"

const instructor = (instName, favNum) => {
    return {
        firstName: instName,
        [favNum]: "That is my favorite!"
    };
}

//Object Methods
//var instructor = {
//    firstName: "Colt",
//    sayHi: function(){
//      return "Hi!";
//    },
//    sayBye: function(){
//      return this.firstName + " says bye!";
//    }
//  }

const instructorObj = firstName => {
    ({
        firstName,
        sayHi: "Hi",
        sayBye: (firstName + " says bye!")
    });
};

//CreateAnimal function
//Write a function which generates an animal object. The function should accept 3 arguements:
//species: the species of animal ('cat', 'dog')
//verb: a string used to name a function ('bark', 'bleet')
//noise: a string to be printed when above function is called ('woof', 'baaa')
//Use one or more of the object enhancements we've covered

//const d = createAnimal("dog", "bark", "Woooof!")
//// {species: "dog", bark: ƒ}
//d.bark()  //"Woooof!"
//
//const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
//// {species: "sheep", bleet: ƒ}
//s.bleet() //"BAAAAaaaa"

const createAnimals = (species, verb, noise) => {
    ({
        species,
        [verb]: noise
    });
}