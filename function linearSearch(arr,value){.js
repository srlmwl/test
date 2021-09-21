function linearSearch(arr,value){
    for ( let i in arr ){
        if (arr[i] == value ){
            return i;
        } 
    } 
    return -1
}


arr = [2,5,1,9,0]
console.log(linearSearch(arr,8))