function Validation() {
  let confirmPostoal = document.getElementById('postal').value;
  let regexCheck = "[A-Z][0-9][A-Z][0-9][A-Z][0=9]";
  let check = regexCheck.test(confirmPostoal);
  
    if (!check) 
    {
      throw("The Postal Code written by you Incorrect");
    } 

};

function hide() {
  let show = document.getElementById('Rate');
  Rate.style.display = "none";
}

function show() {
    let show = document.getElementById('Rate');
    Rate.style.display = "block";
}

