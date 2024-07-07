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

| [Home](./README.md) | [Vs Code](./002_vs-code.md) | [Comandos Git](./004_git.md) | [Extensões Chrome](./003_extensoes_chrome.md) |
