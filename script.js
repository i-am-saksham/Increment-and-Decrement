// const countValue = document.querySelector('#counter');

// const increment=() =>{
//     // Get the value from UI
//     // let value = countValue.innerText;/*This will take the content from countValue in the form of string so to convert it into int we use parse int */
//     let value=parseInt(countValue.innerText);
//     // Update the value
//     value=value+1;
//     // set the value onto UI
//     countValue.innerText=value;
// };

// const decrement=() =>{
//     // Get the value from UI
//     let value=parseInt(countValue.innerText);
//     // Update the value
//     value=value-1;
//     // set the value onto UI
//     countValue.innerText=value;
// };
const countValue = document.getElementById('counter');

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};