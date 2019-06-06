//constructor function without arguments
function Dress(){
    this.model='shirt',
    this.size=function(){
        console.log( 'the type of dress is'+ " " +this.model+" "+'and its size is'+" "+'30');
        }
}
let cloths = new Dress();
cloths.size(); 
//constructor function with arguments
function Cloths(model_name){
    this.model_type=model_name,
    this.size=function(){
        console.log( 'the type of dress is'+ " " +this.model_type+" "+'and its size is'+" "+'40');
        }
}
let dress = new Cloths('kurutha');
dress.size(); 