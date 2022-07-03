const getData = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      const response = JSON.parse(xhttp.responseText);
      document.getElementById("demo").innerHTML = response.data.profilePic;
    }
  };
  xhttp.open("GET", "http://127.0.0.1:3000", true);
  xhttp.send();
};
