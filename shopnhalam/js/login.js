function check() {
	let checker = false;
// user
	let username = document.getElementById('username').value;
	if(username.length === 0)
	{
		document.getElementById('er_user').innerHTML = 'Please fill in your full username!';
		checker = true;
	}
	
	else  {
		let regex_user =/^[a-zA-Z0-9]{6,32}$/;
		if (regex_user.test(username) == false) {
			 document.getElementById('er_user').innerHTML = 'Invalid username!' ;
		checker = true;
		}
		else{
			document.getElementById('er_user').innerHTML ='';
		}
	}



//password
	let password = document.getElementById('password').value;
	if(password.length === 0)
	{
		document.getElementById('er_pass').innerHTML = 'Please fill in your full password!';
		checker = true;	
	}
	else{
		let regex_pass =/^[a-zA-Z0-9]{6,32}$/;
		if (regex_pass.test(password) == false) {
			document.getElementById('er_pass').innerHTML = document.getElementById('er_pass').innerHTML = 'Invalid password!' ;
		checker = true;	
		}
		else{
			document.getElementById('er_pass').innerHTML ='';
		}
	}
	//cfpass

// let cfpassword = document.getElementById('cfpassword').value;
// 	if(cfpassword.length === 0)
// 	{
// 		document.getElementById('er_cfpass').innerHTML = 'Please fill in your full confirm password!';
// 		checker = true;	
// 	}
// 	else{
// 		let regex_pass =/^[a-zA-Z0-9]{6,32}$/;
// 		if (regex_pass.test(password) == false) {
// 			document.getElementById('er_cfpass').innerHTML = document.getElementById('er_cfpass').innerHTML = 'Invalid confirm password!' ;
// 		checker = true;	
// 		}
// 		else{
// 			document.getElementById('er_cfpass').innerHTML ='';
// 		}
// 	}

	//
	if(checker){
		return false;
	}
}