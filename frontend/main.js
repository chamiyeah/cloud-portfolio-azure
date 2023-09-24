window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount ();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 60;
    fetch(functionApi).then(response =>{
      return response.json ()  
    }).then (response => {
        console.log("Website Called functionApi");
        count = response.count;
        document.getElementbyId("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    }
    );
    return count;
}