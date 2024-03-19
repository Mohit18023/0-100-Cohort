// function getAnimalData(){
//     // fetch function sends 
//     const response = fetch("https://fakerapi.it/api/v1/persons")
//          .then((response)=>{
//             const data = response.json().then((data)=>{
//                 console.log(data)
//             })
//          })
        
// }

async function getAnimalData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data)
}