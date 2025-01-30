const input=document.getElementById('inp');
const bucketdiv=document.getElementById("bucket");
const bucketlist=[];
function add()
{
    if (input.value.trim() == '')
        {
            alert("please add something")
        }
        else
        {
            bucketlist.push(input.value)
                                DisplayData(); 
        }
        
        input.value = ""
    
}
function DisplayData()
{
    bucketdiv.textContent='';
    bucketlist.forEach((li,i)=>
        {
            const listItem=document.createElement("li");
            listItem.classList.add("listItem");
            const para=document.createElement("p");
            para.textContent=li;
            const deleteButton=document.createElement("button");
            deleteButton.onclick=function()
            {
                bucketlist.splice(i,1);
        DisplayData();
            }
            deleteButton.textContent="❎"
            listItem.append(para,deleteButton);
            bucketdiv.appendChild(listItem);
    
        })

}