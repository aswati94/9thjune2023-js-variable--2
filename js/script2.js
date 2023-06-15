//var global declaration using block {means curly braces} scope 
var x=10; // here var is a global variable as declared outside the block
{   // block scope
    console.log(x);   
}
{   // i can have as many as block scope
    // lets declare let variable inside block scope & execute outside
    var b= 30;
}
    // execute outside the block scope
    console.log(b);      // through error as we can't access the variable declared inside the block scope using let keyword

{
    var b= 30;   //declare var keyword inside the block scope & execute outside 
}
    console.log(b);


{
    let a= 10;
    let b= 20;
    console.log(a+b);
}