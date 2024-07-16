const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MTJV3.jpg") {
    myImage.setAttribute("src", "images/vapehog.jpg");
  } else {
    myImage.setAttribute("src", "images/vapehog.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Happy Birthday, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Happy Birthday, ${storedName}`;
  }