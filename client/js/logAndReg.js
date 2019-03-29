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
		send_to('POST', '/api/accounts', data, on_ok, on_err);
	};
		document.getElementById('reg').addEventListener('click', function() {
			console.log("reg attempt\n");
		validate_register(function() {
			console.log("Success!")
		}, function(err) {
			console.log(err)
		});
	});
});
