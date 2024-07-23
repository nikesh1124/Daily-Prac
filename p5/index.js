
 async function fetchdata(){
    console.log('dfg')
     const res= await fetch('https://jsonplaceholder.typicode.com/todos/');
     const data= await res.json();

     data.forEach(item=>{
            let div=document.createElement('div');
            let div1=document.createElement('div')
            div1.innerHTML=item.title;
            const div2=document.createElement('div')
            div2.textContent=item.id;
            div.appendChild(div1);
            div.appendChild(div2);
            div.classList.add('added');
            div.addEventListener('click',()=>{
                alert(item.id);
            })
            document.getElementById('parr').appendChild(div);
     })
     console.log("ja");
 }

 fetchdata();

// async function connect(){
//     const res= await fetch('https://jsonplaceholder.typicode.com/todos/')
//     api_data= await res.json();
//     {
//     api_data.forEach(item=>{
//         // console.log(item.title);
//         let div=document.createElement('div');
//         div.innerHTML(item.title);
//         let div1=document.createElement('div');
//         div1.innerHTML(item.id);
//         let par=document.getElementById('chi');
//         par.appendChild(div);
//     })}
// }
// connect();
