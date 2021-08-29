document.addEventListener("DOMContentLoaded", () => {
  var qno = document.getElementById("qno"); // for qno
  var fnum = document.getElementById("first"); // first number
  var operator = document.getElementById("operator"); // + - * /
  var snum = document.getElementById("second"); // second number
  var btn = document.getElementById("submit"); // for submitting the answer
  var ans = document.getElementById("answer"); // for answer input box
  var qnumber = 0; // actual question no variable
  var scoreNum = 0; //its actual score
  var score = document.getElementById("score"); //score no
  var level = 20;
  var easy = document.getElementById("easy"); // level mode
  var medium = document.getElementById("medium"); // level mode
  var difficult = document.getElementById("difficult"); // level mode
  var correct = document.getElementById("correct");
  var wrong = document.getElementById("wrong");
  easy.addEventListener("click", () => {
    level = 20;
    optrrslt = changeOperator();
    changeNums(optrrslt,false);
    easy.disabled = true;
    medium.disabled = false;
    difficult.disabled = false;
  });
  medium.addEventListener("click", () => {
    level = 50;
    optrrslt = changeOperator();
    changeNums(optrrslt,false);
    easy.disabled = false;
    medium.disabled = true;
    difficult.disabled = false;
  });
  difficult.addEventListener("click", () => {
    level = 100;
    optrrslt = changeOperator();
    changeNums(optrrslt,false);
    easy.disabled = false;
    medium.disabled = false;
    difficult.disabled = true;
  });

  btn.addEventListener("click", () => {
    switch (optrrslt) {
      case "+":
        checkplus();
        break;
      case "-":
        checkminus();
        break;
      case "*":
        checkmultiply();
        break;
      case "/":
        checkdivide();
        break;
    }
  });
  const checkplus = () => {
    console.log("Checking plus");
    num1 = Number(fnum.innerText);
    num2 = Number(snum.innerText);
    let value = Number(ans.value);
    if (value === num1 + num2) {
      console.warn("Correct Answer");
      scoreNum++;
      score.innerText = "Score : " + scoreNum;
      correctSound();
    } else {
      console.error("Wrong Answer");
      scoreNum--;
      score.innerText = "Score : " + scoreNum;
      wrongSound();
    }
    optrrslt = changeOperator();
    changeNums(optrrslt);
    ans.value = "";
  };
  const checkminus = () => {
    console.log("Checking minus");
    num1 = Number(fnum.innerText);
    num2 = Number(snum.innerText);
    let value = Number(ans.value);
    if (value === num1 - num2) {
      console.warn("Correct Answer");
      scoreNum++;
      score.innerText = "Score : " + scoreNum;
      correctSound();
    } else {
      console.error("Wrong Answer");
      scoreNum--;
      score.innerText = "Score : " + scoreNum;
      wrongSound();
    }
    optrrslt = changeOperator();
    changeNums(optrrslt);
    ans.value = "";
  };
  const checkmultiply = () => {
    console.log("Checking multiply");
    num1 = Number(fnum.innerText);
    num2 = Number(snum.innerText);
    let value = Number(ans.value);
    if (value === num1 * num2) {
      console.warn("Correct Answer");
      scoreNum++;
      score.innerText = "Score : " + scoreNum;
      correctSound();
    } else {
      console.error("Wrong Answer");
      scoreNum--;
      score.innerText = "Score : " + scoreNum;
      wrongSound();
    }
    optrrslt = changeOperator();
    changeNums(optrrslt);
    ans.value = "";
  };
  const checkdivide = () => {
    console.log("Checking divide");
    num1 = Number(fnum.innerText);
    num2 = Number(snum.innerText);
    let value = Number(ans.value);
    if (value === num1 / num2) {
      console.warn("Correct Answer");
      scoreNum++;
      score.innerText = "Score : " + scoreNum;
      correctSound();
    } else {
      console.error("Wrong Answer");
      scoreNum--;
      score.innerText = "Score : " + scoreNum;
      wrongSound();
    }
    optrrslt = changeOperator();
    changeNums(optrrslt);
    ans.value = "";
  };

  const randInt = () => {
    let rnum = Math.random() * level;
    rnum = Math.round(rnum);
    return rnum;
  };
  const changeNums = (optrrslt,queno = true) => {
    var rnum1 = randInt();
    var rnum2 = randInt();
    if (optrrslt == "/") {
      while (rnum1 % rnum2 !== 0) {
        rnum1 = randInt();
        rnum2 = randInt();
      }
      fnum.innerText = rnum1;
      snum.innerText = rnum2;
    } else {
      fnum.innerText = rnum1;
      snum.innerText = rnum2;
    }
    if (queno) {
      qnumber++;
    }
    qno.innerText = qnumber + " :";
  };

  // for changing operator randomly
  const changeOperator = () => {
    let operatorsarr = ["+", "-", "*", "/"];
    let optr = operatorsarr[Math.floor(Math.random() * 4)]; // getting operator randomly
    operator.innerHTML = optr;
    return optr;
  };

  let optrrslt = changeOperator();
  changeNums(optrrslt);

  document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      btn.click();
    }
  });

  const correctSound = ()=>{
    correct.currentTime = 0;
    correct.play()
  }
  const wrongSound = ()=>{
    wrong.currentTime = 0;
    wrong.play()
  }
});
