

function checkTheList(elem,list){
   
    return list.indexOf(elem)===-1? false:true  
}


function validHours(arr){
    var sum=0
    if(arr.length===0){return false}
    for(var i in arr){
        if(arr[i]<=0 || arr[i]>16){return false}
        sum=+arr[i];
    }

   return sum >16? false : true
}

module.exports = {
    checkTheList:checkTheList,
    validHours:validHours,
}