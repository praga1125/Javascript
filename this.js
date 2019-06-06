var person = {
    firstName: "pragadeesh",
    lastName : "praga",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
 console.log(person.fullName());