//factory function without arguments
function mobile(){
    return {
     model:'mi',
     price:function() {return '33000';}
    };
}
let samsung=mobile();
console.log("the phone name is"+" " +samsung.model+" "+"and its price"+" "+samsung.price());
//factory function with arguments
function phone(model_name ){
    return {
     model:model_name,
     price:function() {return '44000';}
    };
}
let sony=phone('xperia');
console.log("the phone name is"+" " +sony.model+" "+"and its price"+" "+sony.price());