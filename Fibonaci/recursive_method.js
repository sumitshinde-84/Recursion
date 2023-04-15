// solution one 

function fibRec(n,arr=[]){
   if(n==0){
    return []
   }else if(n==1){
    return [0,1]
   }else {
    arr = fibRec(n-1,arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
   }
   return arr
}

//  solution 2

const fibRecursive =(n,a=[0,1])=>{
    if(a.length>=n) return a;
    return fibRecursive(n,[...a,a[a.length - 1] + a[a.length - 2]])

}
  
console.log(fibRecursive(6))