let friends=["Penny","ross","rachel","chandler","monica","sheldon"]
friends.shift("penny");
friends.unshift("pheobe");
friends.pop("sheldon");
friends.push("joey");
friends.splice(2,0,"justin");

let arr=[3,4,5,6]
function square(x)
{
    console.log(x*x);
}
arr.forEach(square);


arr=["raj","shailendra","Mahesh","Ram"]

arr.forEach(function(ele,indx){
    console.log(ele.charAt(0))
});


