const { exec } = require('child_process');
const command = `"bash" "C:\\users\\clemas\\desktop\\klemas.sh"`;
exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`Erro ao executar o comando: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`Erro padrão do processo filho: ${stderr}`);
		return;
	}
	console.log(`Saída padrão do processo filho: ${stdout}`);
});
