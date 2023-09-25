window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount ();
})

const functionApiUrl = 'https://azureportfoliocounter.azurewebsites.net/api/GetResumeCounter?code=mWhZH0AuGdN4Rf0MkvMqbgPAr5kW4FPUjImMopJX7qJFAzFuQBBUpQ=='
const localfunctionApi ='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 1;
    fetch(functionApiUrl).then(response =>{
      return response.json ()  
    }).then (response => {
        console.log("Website Called functionApi");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    }
    );
    return count;
}