const postData = async (url = "",data = {})=> {
    console.log('Post data function running',data);
    const response  = await fetch (url, {
        method: 'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        console.log(newData)
        return newData
        
    }catch(error){
        console.log('error',error)
   }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    
    let formText = document.getElementById('name').value
   //Client.checkForName(formText)


   postData('http://localhost:8081/api', {txt: formText})
   .then(function(res){
       document.getElementById('results').innerHTML = res.agreement
       document.getElementById('confidence').innerHTML = res.confidence
       document.getElementById('irony').innerHTML = res.irony
       
     
       console.log(res.agreement)
       console.log(res.confidence)
       console.log(res.irony)
      
    })

}
    
   // console.log("::: Form Submitted :::")


   
   
      

   


export { handleSubmit }


