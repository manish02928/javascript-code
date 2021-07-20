/**********************/

var counter=0;
function getData(){
    console.log('fetching Data...'+counter++);
}



let searchData = debounMethod(getData,300);

function debounMethod(fn,delay){
    let timer;
    return function(...args){
    clearTimeout(timer);
        timer = setTimeout( ()=>{
            getData.apply(args);
        },dealy);
    }

}