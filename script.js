// DOM = Document Object Model

var employees = [
  {
  "userId":"rirani",
  "jobTitleName":"Developer",
  "firstName":"Romin",
  "lastName":"Irani",
  "preferredFullName":"Romin Irani",
  "employeeCode":"E1",
  "region":"CA",
  "phoneNumber":"408-1234567",
  "emailAddress":"romin.k.irani@gmail.com"
  },
  {
  "userId":"nirani",
  "jobTitleName":"Developer",
  "firstName":"Neil",
  "lastName":"Irani",
  "preferredFullName":"Neil Irani",
  "employeeCode":"E2",
  "region":"CA",
  "phoneNumber":"408-1111111",
  "emailAddress":"neilrirani@gmail.com"
  },
  {
  "userId":"thanks",
  "jobTitleName":"Program Directory",
  "firstName":"Tom",
  "lastName":"Hanks",
  "preferredFullName":"Tom Hanks",
  "employeeCode":"E3",
  "region":"CA",
  "phoneNumber":"408-2222222",
  "emailAddress":"tomhanks@gmail.com"
  }
]

var tbody = document.getElementById("tbody");

for (i=0; i<employees.length; i++){
  var tr = document.createElement('tr');
  var employeeCode = document.createElement('td')
  var jobTitle = document.createElement('td')
  var fullName = document.createElement('td')
  var email = document.createElement('td')
  var region = document.createElement('td')
  employeeCode.innerText = employees[i].employeeCode;
  jobTitle.innerText = employees[i].jobTitleName;
  fullName.innerText = employees[i].preferredFullName;
  email.innerText = employees[i].emailAddress;
  region.innerText = employees[i].region;
  tr.appendChild(employeeCode);
  tr.appendChild(jobTitle);
  tr.appendChild(fullName);
  tr.appendChild(email);
  tr.appendChild(region);
  tbody.appendChild(tr);
}

var firstTh = document.querySelector("#firstTh")
firstTh.style.border = "none"



function handleSubmit(event){
  event.preventDefault();
  var username = document.getElementById("username").value
  
  document.getElementById("formUsername").innerText = username;
}