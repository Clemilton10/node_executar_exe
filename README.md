# Instalação

| [Home](./README.md) | [Vs Code](./002_vs-code.md) | [Comandos Git](./004_git.md) | [Extensões Chrome](./003_extensoes_chrome.md) |

### Instalador do Node

[https://nodejs.org/en/download/prebuilt-installer](https://nodejs.org/en/download/prebuilt-installer)

```sh
node -v
npm -v
```

### Instalando o yarn

```sh
npm install -g yarn
```

### Instalando pacotes Globais

```sh
# yarn global add nodemon # esse não deu certo
npm install -g nodemon --save-dev
```

-   Crie uma pasta
-   Entre nela e crie um arquivo `package.json`

```json
{
	"name": "websocket",
	"version": "1.0.0",
	"description": "",
	"main": "ws.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC",
	"dependencies": {
		"express": "^4.16.2",
		"ws": "^8.18.0"
	}
}
```

```sh
yarn install
```

### exe1.js

```js
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
```

### exe2.js

```js
const { spawn } = require('child_process');
const exePath = 'C:\\xampp\\xampp-control.exe';
const args = [];
const options = {
	detached: true,
	stdio: 'ignore'
};
const child = spawn(exePath, args, options);
child.unref();
```

| [Home](./README.md) | [Vs Code](./002_vs-code.md) | [Comandos Git](./004_git.md) | [Extensões Chrome](./003_extensoes_chrome.md) |
