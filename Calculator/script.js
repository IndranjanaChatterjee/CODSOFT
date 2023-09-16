const key=document.querySelectorAll(".click");
const input=document.getElementById("text");
key.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        if(e.innerHTML=="π")
        {
            input.value+="π";
        }
        else
        {
        input.value+=e.innerHTML;
        }

    })
})
const ac=document.querySelector(".ac");
const c=document.querySelector(".c");
ac.addEventListener("click",()=>
{
    input.value="";
})
c.addEventListener("click",()=>
{
    let val=input.value;
    input.value=val.slice(0,val.length-1);
})
const result=document.getElementById("equal");
result.addEventListener("click",()=>
{
    let val=input.value;
    if(val.includes('π'))
    {
        
        val=val.replace('π','3.14');
        
    }
    
        input.value=eval(val);
        console.log(eval(val));
        
    
    
})
document.addEventListener("keypress",(e)=>
{
    let event=e.key;
    if(event=="Enter")
    {
        let val=input.value;
    
        input.value=eval(val);
        console.log(eval(val));
        
    }
    else
    {
        let a=document.getElementById(`${event}`);
        console.log(a);
        a.classList.toggle("animate");

    }
})
const circle=document.querySelector(".circle");
const get=document.querySelector(".container");
const outline=document.querySelector(".Calculator");
circle.addEventListener("click",()=>
{
    circle.classList.toggle("move");
    document.body.classList.toggle("color");
    get.classList.toggle("change");
    outline.classList.toggle("border");
    //console.log("hi");
})
