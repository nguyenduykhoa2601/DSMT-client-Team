export const getLetterfromString = (arr) => {
    const myArray = arr.split("");
    return myArray
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
   
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
   
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
   
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
   
    return array;
  }

export const randomString = (string)=>{
    let arr = []
    while (arr.length !==4 ){
        if(!arr.includes(string)){
            arr.push(string)
        }
         const item1 = string.split('').sort(function(){return 0.5-Math.random()}).join('')
        if(item1 !== string && arr.length <4){
            arr.push(item1)
        }
        const item2= string.split('').sort(function(){return 0.5-Math.random()}).join('')
        if(item2 !== string && item2 !== item1 && arr.length <4){
            arr.push(item2)
        }
        const item3 =  string.split('').sort(function(){return 0.5-Math.random()}).join('')
        if(item3 !==string && item3 !== item2 && item3!==item1 && arr.length <4){
            arr.push(item3)
        }
    }
   
    return shuffle(arr)
}