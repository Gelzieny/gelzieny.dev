<h1 align="center">Meu Portfólio Full-Stack | Gelzieny</h1>

## ✨ Descrição

Bem-vindo(a) ao meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minhas habilidades como desenvolvedor(a) full-stack e exibir alguns dos meus principais trabalhos.

Construído com a performance e escalabilidade do **Next.js** e a flexibilidade do **Tailwind CSS**, este portfólio é a vitrine de minhas paixões e experiências no mundo do desenvolvimento web.

## 🚀 Funcionalidades

* **Página Inicial:** Uma introdução sobre mim e um resumo das minhas principais competências.
* **Sobre Mim:** Detalhes sobre minha jornada, experiência profissional e formações.
* **Projetos:** Uma galeria dos meus projetos mais relevantes, com descrições, tecnologias utilizadas e links para demos e repositórios (se aplicável).
* **Habilidades:** Lista das tecnologias e ferramentas que domino, categorizadas por área (Front-end, Back-end, Banco de Dados, Ferramentas, etc.).
* **Contato:** Um formulário para facilitar o contato, onde as mensagens são enviadas diretamente para o meu e-mail.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

* **Front-end:**
    * [Next.js](https://nextjs.org/) (Framework React)
    * [React](https://react.dev/) (Biblioteca JavaScript)
    * [TypeScript](https://www.typescriptlang.org/) (Para tipagem estática)
    * [Tailwind CSS](https://tailwindcss.com/) (Framework CSS utilitário)
* **Back-end (Next.js API Routes):**
    * [Node.js](https://nodejs.org/en)
    * [Nodemailer](https://nodemailer.com/about/) (Para envio de e-mails via API Route)
* **Hospedagem & Deploy:**
    * [Vercel](https://vercel.com/) (Para deploy contínuo do Next.js)
    * [GitHub](https://github.com/) (Controle de versão e hospedagem do código)
* **Outras:**
    * [ESLint](https://eslint.org/) (Para padronização de código)
    * [Prettier](https://prettier.io/) (Para formatação de código)
    * [Git](https://git-scm.com/) (Sistema de controle de versão)

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar este projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Gelzieny/gelzieny-portfolio.git](https://github.com/Gelzieny/gelzieny-portfolio.git)
    # Substitua 'Gelzieny' e 'gelzieny-portfolio' pelo seu usuário e nome do repositório, se diferente.
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd gelzieny-portfolio
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Crie um arquivo `.env.local` na raiz do projeto** e adicione as seguintes variáveis de ambiente, substituindo pelos seus dados de configuração de e-mail (necessário para o formulário de contato):
    ```env
    # Configurações para o Nodemailer (para envio de e-mail do formulário de contato)
    EMAIL_HOST=seu_servidor_smtp.com
    EMAIL_PORT=587 # Ou 465 para SSL
    EMAIL_SECURE=false # Defina como true se a porta for 465 (SSL)
    EMAIL_USER=seu_email@dominio.com
    EMAIL_PASS=sua_senha_do_email
    EMAIL_FROM=seu_email@dominio.com # Email de remetente
    EMAIL_TO=seu_email_para_receber@dominio.com # Seu email para receber as mensagens
    ```
    **Importante:** Nunca envie seu arquivo `.env.local` para o GitHub! Ele já está ignorado no `.gitignore`.

5.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
6.  **Abra seu navegador** e acesse [http://localhost:3000](http://localhost:3000) para ver o portfólio rodando.

## 🔗 Acesse o Portfólio Online

Este portfólio está disponível publicamente. Sinta-se à vontade para explorá-lo:

[**LINK PARA O SEU PORTFÓLIO ONLINE**](https://www.seusite.com.br)
* *Lembre-se de substituir este link pelo URL real do seu deploy na Vercel ou Netlify.*

## ✉️ Contato

Ficou interessado(a) no meu trabalho? Não hesite em entrar em contato!

* **Nome:** Gelzieny
* **Email:** seu.email@exemplo.com
* **LinkedIn:** [Seu perfil do LinkedIn](https://www.linkedin.com/in/seu-perfil/)
* **GitHub:** [Seu perfil do GitHub](https://github.com/Gelzieny)

## 🤝 Contribuição (Opcional)

Se você tem sugestões ou encontrou algum problema, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*. Toda contribuição é bem-vinda!

---