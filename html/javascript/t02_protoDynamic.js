// Dynamic Prototype Instantiation

var peopleDynamicProto = function(name, age, state){
    
    this.name = name;
    this.age = age;
    this.state = state;
    
    if(typeof this.printPerson !-- 'function'){
        peopleDynamicProto.prototype.printPerson = fincton(){
            console.log(this.name + ", " + age + ", " + 'state');
        }
    }
};

var person1 = new peopleDynamicProto('john', 23, 'CA');

