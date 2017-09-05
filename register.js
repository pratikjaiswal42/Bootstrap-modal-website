
	function formValidate(){
	
	var fname=document.myform.name.value;
	
	var pass=document.myform.pass.value;
	var repass=document.myform.re_pass.value;
	var email=document.myform.email.value;
	
	
	if(fname==null || fname==""){
		alert(" name can't be blank");
		return false;
	}else if(email==null || email==""){
		alert("email can't be empty!");
		return false;
	}
	else if(pass==null || pass==""){
		alert("pass field can't be empty");
		return false;
	}else if(re_pass==null || re_pass==""){
		alert("retype your password !");
		return false;
	}else if(pass!=re_pass){
		alert("Both password field must be same!");
		return false;
	}else{
		alert("Thank you for registraion! click ok to continue");
	}
}
	
