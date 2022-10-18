# Minicurso: React Zero-to-Hero

### IFSP - Campus Caraguatatuba

### Semana Nacional de Ciência e Tecnologia 2022

### Eduardo P de Sousa <edupsousa@gmail.com>

## Ambiente de Desenvolvimento

- Node.JS (v14 ou superior) [https://nodejs.org/](https://nodejs.org/)

- Editor de Textos ou IDE [https://code.visualstudio.com/](https://code.visualstudio.com/)

- Navegador Web

  - Firefox: https://www.mozilla.org/pt-BR/firefox/new/
  - Chrome: https://www.google.com/intl/pt-BR/chrome/

- Extensão React Developer Tools para o Navegador Escolhido
  - [DevTools para Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [DevTools para Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Copiando o Repositório

Esse repositório contém o código-fonte do aplicativo usado como base para o mini-curso. Para obter uma cópia do código utilize o comando:

```bash
git clone https://github.com/edupsousa/minicurso-react.git
```

Após copiar o repositório acesse o diretório do projeto e então instale as dependências e execute o servidor de desenvolvimento do Vite.JS usando os comandos:

```bash
cd minicurso-react/tutorial
npm install
npm run dev
```

Se tudo correu bem você verá uma mensagem parecida com a mostrada abaixo:

```
  VITE v3.X.X  ready in X ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose

[TypeScript] Found 0 errors. Watching for file changes.
```

Acesse o endereço mostrado na mensagem [http://127.0.0.1:5173/](http://127.0.0.1:5173/) para visualizar o aplicativo em funcionamento.

Abra o diretório `minicurso-react/tutorial` no editor da sua preferência. O ponto de entrada para o código-fonte do aplicativo é o arquivo: `src/main.tsx`.

## Branches do Repositório

Esse repositório contém 2 branches que abordam tópicos um pouco além do curso básico de React:

O primeiro deles é o uso de contextos para evitar a passagem de propriedades entre diversos níveis de componentes, o chamado [_prop drilling_](https://www.alura.com.br/artigos/prop-drilling-no-react-js). Você encontra o código dessa branch [aqui](https://github.com/edupsousa/minicurso-react/tree/com-contexto).

O uso de contextos facilita a comunicação entre os componentes e a injeção de dependências (o que costuma ser útil para diversos casos). Porém, todos os componentes que dependem de um contexto são renderizados novamente a cada mudança nesse contexto (ainda que o componente dependa de uma parte do contexto que não mudou). Isso pode gerar problemas de performance e por isso não é recomendado utilizar o contexto como provedor do estado global da sua aplicação (exatamente como fizemos na outra branch :grimacing:).

Para resolver esse tipo de problema o ideal é usar uma ferramenta feita específicamente para gerenciar o estado global da aplicação. Existem diversas alternativas, algumas mais opinativas como [Redux](https://redux.js.org/). E outras mais flexíveis como [Zustand](https://zustand-demo.pmnd.rs/). Em nosso exemplo optamos por utilizar a ferramenta Zustand por sua simplicidade e flexibilide. Você pode encontrar o código dessa branch [aqui](https://github.com/edupsousa/minicurso-react/tree/com-store-e-track).

## Navegando pelos Commits do Repositório

Os commits do repositório seguem uma ordem "mais ou menos didática" para construção do aplicativo. Assim, recomendo que você dê uma olhada na lista de commits e navegue pela alterações introduzidas por cada um deles para entender como esse exemplo foi construído.

- [Lista de Commits da Branch Principal](https://github.com/edupsousa/minicurso-react/commits/main)

### Aviso:

Por se tratar de um repositório "didático" futuras mudanças nesse repositório podem afetar o histórico de commits das branches (commits podem ser apagados, inseridos ou modificados no histórico).

## Referências

- [React.JS](https://pt-br.reactjs.org/)

  - [Tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html)
  - [Documentação](https://pt-br.reactjs.org/docs/getting-started.html)

- [Vite.JS](https://vitejs.dev/)

- [TypeScript](https://www.typescriptlang.org/pt/docs/)

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [Arrow Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

    ```javascript
    const funcao = () => console.log("Hello World");
    funcao();
    ```

  - [Atribuição por Desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

    ```javascript
    const { log } = console;
    const [hello, world] = "hello world".split(" ");
    log(hello, world);
    ```

## Para começar um projeto "do zero":

Após instalar o Node.JS basta utilizar o comando `npm create vite@latest` para iniciar um novo projeto. Para mais informações veja a documentação [aqui](https://vitejs.dev/guide/).
