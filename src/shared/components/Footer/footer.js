import React from 'react';
import './footer.css';

export default function Footer() {

  return (
    <footer id="Footer">
      <div class="container">
        <div class="row">
          <div class="conteudo">
            <h5>Sobre-nós</h5>
            <ul>
              <li>Informações da Empresa</li>
              <li>Contato</li>
            </ul>
            <a href="">
              <button type="button" class="btn btn-default">Contato</button>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>© 2021 Copyright - Quest</p>
      </div>
    </footer>
  );
};