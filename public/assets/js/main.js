// passwords match validation
function validatePasswords() {
  var pass1 = document.getElementById("createPassword1").value;
  var pass2 = document.getElementById("createPassword2").value;
  var ok = true;
  if (pass1 != pass2) {
      document.getElementById("createPassword1").style.borderColor = "#E34234";
      document.getElementById("createPassword2").style.borderColor = "#E34234";
      ok = false;
      alert("Passwords Do Not Match!!!");
  }
  return ok;
}

// tablet check in time
$(document).on("click", "#tabletCheckIn", function (e) {
  event.preventDefault();
  let signInTime = {
    userName: $("#idTablet").val().trim(),
    startTime: (Date.now()) / 1000 / 60
  }
  console.log(signInTime);
  $.ajax("/haircutStartTime", {
    type: "POST",
    data: signInTime
  }).then(function (data){
  })
});

// tablet check out time
$(document).on("click", "#tabletCheckOut", function (e) {
  event.preventDefault();
  let signOutTime = {
    userName: $("#idTabletTwo").val().trim(),
    endTime: (Date.now()) / 1000 / 60
  }
  console.log(signOutTime);
  $.ajax("/haircutEndTime", {
    type: "POST",
    data: signOutTime
  }).then(function (data){
    console.log(data);
    
  })
});

// jQuery & Velocity.js sign in JS
function slideUpIn() {
    $("#login").velocity("transition.slideUpIn", 1250)
  };
  
  function slideLeftIn() {
    $(".row").delay(500).velocity("transition.slideLeftIn", {stagger: 500})    
  }
  
  function shake() {
    $(".password-row").velocity("callout.shake");
  }
  
  slideUpIn();
  slideLeftIn();
  $("button").on("click", function () {
    shake();
  });
  //