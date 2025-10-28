// IMMEDIATELY INVOKED FUNCTION EXPRESSION

function conn1(){
    console.log(`DB CONNECTED, conn1`);
}

conn1();

// We wrap the function inside a "paranthasis()" 
(function conn2(){
    console.log(`DB CONNECTED, conn2`);
   
})(); // ";(semicolon)" is mandatory to stop the execution till point, otherwise error occurs

(() => {
    console.log(`DB CONNECTED, conn3`);
    
})();