import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/41965470?s=460&u=04cf943d4316f16e49145d939842c9ba341d8b01&v=4" alt="Igor Cruz"/>
        <div>
          <strong>Igor Cruz</strong>
          <span>Matemática</span>
        </div>
      </header>
          
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$100.00</strong>
        </p>

        <button type="button">
          <img src={ whatsappIcon } alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
