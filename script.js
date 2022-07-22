const login = (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const data = {email, password};
  console.log({data});

  fetch('http://localhost:8080/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }) 
    .then(response => response.json())  // convert to json
    .then(response =>{ 
      if(response.message !== "login success"){
        document.getElementById('err-message').innerText = response.message;
      }
    })    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors if the request fails

};


// .then((response) => {
//   return response.json()
// })

// {email, password}   -------> {email: email, password: password}