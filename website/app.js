/* Global Variables */

const API_key = '64a12144e01e9808d2ff09f7d9e1589e';
//const API_key = '52da2042cc7af8661072c3cc5004fa60';



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


const generate_btn = document.getElementById('generate');

generate_btn.addEventListener('click', async()=>{
    const zipCode = document.getElementById('zip').value;
    const appURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_key}&units=metric`;
    const feel = document.getElementById('feelings').value;
    //console.log(appURL);

    
    try{
        if(zipCode == null){
            alert("Enter zip code");
        }
        const fetchedData = await fetch(appURL);
        const data = await fetchedData.json();
        temperature = data.main.temp;
        //console.log(data,temperature);

        //const response = 
        await fetch('/postProjData', {
            method: 'POST',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: newDate,
                temp: temperature,
                feelings: feel
            })     
          });

          const resData = await fetch('/getProjData');
          const resDataJason = await resData.json();
          console.log(resDataJason);


          document.getElementById('date').innerHTML = "Date: " + resDataJason.date;
          document.getElementById('temp').innerHTML = "Tempurature: " + resDataJason.temp;
          document.getElementById('content').innerHTML = "Content: "+ resDataJason.feelings;
        
    }catch(error){
        console.log("error",error);
    }
});