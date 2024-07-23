const colors=[
    {
        color:"red",
        name:"red"
    },
    {
        color:"blue",
        name:"blue"
    },
    {
        color:"purple",
        name:"purple"
    }
]

current=0

function changecolor(){

    const container = document.querySelector(".color");
    const p = document.querySelector(".name");
    
    current+=1
    if(colors.length==current){
        current=0
    }
    
    p.innerHTML="Background color is "+colors[current].name

    container.style.backgroundColor=colors[current].color


}