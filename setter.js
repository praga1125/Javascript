const person ={
    firstname:'pragadeesh',
    lastname:'praga',
    get fullname(){
        return `${person.firstname}${person.lastname}`;
    },
set fullname (value){
    const parts =value.split(' ');
    this.firstname = parts[0];
    this.lastname = parts[1];
        }
};
person.fullname='viki praga';       
console.log(person); 