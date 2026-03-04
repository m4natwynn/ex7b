function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
  
	let sidPattern = /^[0-9]{10}$/;
  
	if (sidPattern.test(sid)) {
	  return true;
	} else {
	  return false;
	}
  }

  function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
  
	let candiPattern = /^(10|[1-9])$/;
  
	if (candiPattern.test(candi)) {
	  return true;
	} else {
	  return false;
	}
  }

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}