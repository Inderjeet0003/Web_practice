const txt=document.querySelectorAll('button')
const screen=document.getElementById('screen')

for(let btn of txt){
    btn.addEventListener('click',(e)=>{
        // console.log(e.target)
        let btnText = e.target.innerText;
        // console.log(btnText)

        if(btnText=='X')
        {
            screen.value += '*'; 
        } 
        else if(btnText=='C'){
            screen.value="";
        }
        else if(btnText=='=')
        {
            try{
                screen.value =  eval(screen.value)
            }
            catch(e){
                screen.value = "INVALID OPERATION"
                // console.log(e.message)
            }
        }
        else{
         screen.value += btnText   
        }


    })
}

// const inp    = document.getElementById('inp')
// const un_list= document.getElementById('list')
// const btn    = document.getElementById('add')

//  btn.onclick = function(e){
//     //  console.log("click")
//     const txt=inp.value;

//     const li=document.createElement('li') 
//     li.innerText = txt;

//     li.onclick=function(e){
//         e.target.remove();
//     }
//     un_list.append(li);

//     inp.value="";

//  }