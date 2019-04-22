window.addEventListener('load', function() {
	var send_to = function(method, where, what, on_ok, on_err) {
		var req = new XMLHttpRequest();
		req.open(method, where, true);
		req.setRequestHeader('Content-type', 'application/json');
		req.onreadystatechange = function() {
			if (req.readyState != 4)
				return;
			if (req.status == 200) {
				on_ok();
			} else if (req.status == 409) {
				on_err(req.responseText);
			} else {
				on_err('Bad response from server: ' + req.status + ' ' + req.statusText);
			}
		};
		req.send(JSON.stringify(what));
	};

	//registers the user, checks that all fields are filled out before 
	//posting to the server
	var validate_register = function(on_ok, on_err) {
		var f_name = document.getElementById('r_name').value;
		var f_username = document.getElementById('r_username').value;
		var f_password = document.getElementById('r_password').value;
		if (! (f_username && f_name && f_password)) {
			on_err('Please fill out all fields');
			return;
		}
		var data = {
			name: f_name,
			username: f_username,
			password: f_password,
		};
        alert('Registration successful!');
		send_to('POST', '/api/accounts', data, on_ok, on_err);
        document.getElementById('login-transition').click();
	};
	//authenticates login credentials, checks to see both fields are inputted before calling backend
	var validate_login = function(on_ok, on_err) {
		var f_username = document.getElementById('f_username').value;
		var f_password = document.getElementById('f_password').value;
		if (! (f_username && f_password)) {
			on_err('Both username and password required');
			return;
		}
		var data = {
			username: f_username,
			password: f_password,
		};
		console.log(data);
		send_to('PUT', '/api/accounts', data, on_ok, on_err);
	};

	document.getElementById('signin').addEventListener('click', function() {
		validate_login(function() {
			console.log("Login sent to server.")
		}, function(err) {
			console.log(err);
		});
	});

	document.getElementById('reg').addEventListener('click', function() {
			console.log("reg attempt\n");
		validate_register(function() {
			console.log("Registration sent to server.")
		}, function(err) {
			console.log(err)
		});
	});
});
