let Str=prompt("Enter the word");
let rev=Str.split('').reverse().join('');
if(Str==rev)
{
    console.log(`${Str} is a pallindrome`);
}
else
{
    console.log(`${Str} is not a pallindrome`); 
}