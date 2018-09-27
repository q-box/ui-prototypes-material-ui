# Lista de comandos usados

```sh
# instalando o gerenciador de pacotes pnpm
npm i -g pnpm

# criando um react app novo
pnpx create-react-app ui-prototypes-material-ui

# inicializando o repositório
git init
git add .
git commit -m "adicionado app inicial"

# conectando ao repositório remoto
git remote add origin https://github.com/q-box/ui-prototypes-material-ui.git
git fetch

# sincronizando
git pull --allow-unrelated-histories origin master
git add .
git commit -m "manual merge"
git push --set-upstream origin master

# adicionando as bibliotecas
pnpm install

# executando a aplicação
pnpm start
```