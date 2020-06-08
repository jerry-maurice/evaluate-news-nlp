function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    let data = {
        'text':formText
    };

    console.log("::: Form Submitted :::", data);
    fetch('http://localhost:8081/data',{
        method: 'POST',
        body: JSON.stringify(data),
        mode:'cors',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",

        }
    }).then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = 'polarity:'+ res.polarity +'</br> subjectivity:'+
        res.subjectivity+'</br> text:'+res.text+'</br> polarity confidence'+res.polarity_confidence+'</br> subjectivity confidence'+
        res.subjectivity_confidence;
    })
}

export { handleSubmit }
