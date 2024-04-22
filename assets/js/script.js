//criação do p

class Subtitulo {
    constructor(sub) {
        this.sub = sub;
        this.element = document.createElement('p');
        this.element.classList.add('subtitulo');
        this.render();
    }

    render() {
        this.element.innerHTML = this.sub;
    }
}

const subtitulo = new Subtitulo('Preencha! Caso nao tiver login aperte em "Cadastrar"');
const tituloDiv = document.querySelector('.titulo');
tituloDiv.appendChild(subtitulo.element); //utilizei para interligar o "h1" com o "p", fazendo q o "p" fique como um sub titulo.

//criação do novo botão

const bntpersonalizado = () => {
    return document.querySelectorAll('.bnt-cadastrar');
  };
  
  const bntPersonalizado = (texto, corFundo) => {
    const botaozinho = document.createElement('button');
    botaozinho.classList.add('bnt-cadastrar');
  
    botaozinho.textContent = texto;
  
    botaozinho.style.backgroundColor = corFundo;
  
  
    return botaozinho;
  };
  
  const botaozinho1 = bntPersonalizado('Cadastrar', '#ff00dd');
  document.body.appendChild(botaozinho1);

  //chamando o main
  const mainElement = document.querySelector('main');
  mainElement.appendChild(botaozinho1); //fazendo o botão fazer parte do main