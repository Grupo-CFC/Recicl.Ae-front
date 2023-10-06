# Guia Rápido: Usando Git no seu Projeto

Este guia foi criado para ajudar aqueles que não estão familiarizados com o Git a contribuir para este projeto. O Git é uma ferramenta de controle de versão que permite rastrear alterações em seu código e colaborar de forma eficiente.

## Passo 1: Baixar o Repositório

1. Abra o terminal ou prompt de comando no seu computador.
2. Navegue até a pasta onde você deseja clonar o repositório. Use o comando `cd` para navegar entre pastas.

```bash
cd caminho/para/sua/pasta
```
Clone o repositório para o seu computador usando o comando git clone:
```bash
git clone https://github.com/Grupo-CFC/Recicl.Ae-front.git
```
## Passo 2: Atualizar seu Projeto Local
1 - Navegue até a pasta do seu projeto, e então execute o comando para atualizar a o projeto
```bash
cd seu-repositorio
```
```bash
git pull origin main
```

## Passo 3: Fazer Alterações
Agora que você tem o projeto em seu computador, você pode fazer as alterações que desejar.

Abra os arquivos do projeto em seu editor de código preferido e faça as mudanças necessárias.
## Passo 4: Commit das Alterações
Depois de fazer suas alterações, você precisa criar um "commit" para registrar essas mudanças no histórico do Git.

1 - Verifique as alterações pendentes:

```bash
git status
```

2 - Adicione as alterações ao seu commit:

```bash
git add .
```

3 - Faça o commit das alterações com uma mensagem descritiva:

```bash
git commit -m "Descrição concisa das alterações feitas"
```

## Passo 5: Enviar Alterações para o GitHub
Agora que você fez um commit das suas alterações, é hora de enviá-las para o GitHub.

Envie suas alterações para o repositório remoto:
```bash
git push origin main
```