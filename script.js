// function fiveMultiplier(x) {
//   console.log("I have", x);
//   return x * 5;
// }

// fiveMultiplier("some value"); //

// callback is a function given as parameter to another function

function toComparePasswords(userNameFromUser, passwordFromUser, callback) {
    var dbResult = callback()
    var username = dbResult.username;
    var password = dbResult.password;
    
    if (userNameFromUser == username && passwordFromUser == password){
        console.log("Login success! Welcome",userNameFromUser,"!")
    }else{
        console.log("Wrong credentials, Login failed!!")
    }
}

function getPasswordFromDB() {
  // inside db
  var username = "syedsalman";
  var password = "12345";
  // =============db ends======

  var dbOutput = {
    "username": username,
    "password": password
  }

  return dbOutput;
}

toComparePasswords("syedsalman","12345",getPasswordFromDB)
