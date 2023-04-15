function fibItr(n){
  let temp,prev=0,curr=1,arr=[0,1];

   if(n==0){
       return []
   }else if(n==1){
       return [0]
   }else if(n==2){
    return [0,1]
   }
   else{
    for(let i=1;i<n;i++){
        temp=curr;
        curr=prev+curr;
        prev=temp;
        arr.push(curr)
    }
    return arr
}}

console.log(fibItr(3))