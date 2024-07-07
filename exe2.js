const { spawn } = require('child_process');
const exePath = 'C:\\xampp\\xampp-control.exe';
const args = [];
const options = {
	detached: true,
	stdio: 'ignore'
};
const child = spawn(exePath, args, options);
child.unref();
