// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 123;
// Criar um elemento <h1>
let cabecalho = document.createElement('H1');
cabecalho.innerHTML = 'Olá alunos!';
document.body.appendChild(cabecalho);
cabecalho.style.borderBottom = 'solid 3px #000';
