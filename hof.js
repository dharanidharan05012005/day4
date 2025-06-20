let a;
function greet(){
  console.log("Hi There");
}
function add(a,callback){
  console.log(a);
  callback() ;
}
add(5,greet);
