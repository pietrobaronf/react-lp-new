import s from './App.module.css'
import img1 from '/01.jpg'
import img2 from '/02.jpg'
import img3 from '/03.jpg'

function App() {
  
const navTo = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <>
      <nav>
      <span className={s.navItems} onClick={() => navTo("s1")}>
        <i class="fa-solid fa-house"></i>
        <a href='#s1' className={s.navWords}>Jogo</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s2")}>
        <i class="fa-solid fa-car-side"></i>
        <a href='#s2' className={s.navWords}>Carros</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s3")}>
        <i class="fa-brands fa-square-youtube"></i>
        <a href='#s3' className={s.navWords}>Vídeo</a>
      </span>
      <span className={s.navItems} onClick={() => navTo("s4")}>
        <i class="fa-solid fa-phone"></i>
        <a href='#s4' className={s.navWords}>Contato</a>
      </span>
    </nav>
    <main>
      <section className={s.s1} id="s1">
        <h1>Need for Speed</h1>
        <h2>Best racing game of all times.</h2>
      </section>
      <section className={s.s2}  id="s2">
        <div className={s.card}>
          <img width="300px" height="auto" src={img1} alt="nfs1" />
          <div>
            <h4>Need for Speed: Underground 2</h4>
            <p>Traz uma cidade vibrante onde o jogador alterna entre corridas legais durante o dia e disputas ilegais à noite. O sistema de risco e reputação adiciona tensão extra, especialmente quando a polícia entra em cena.</p>
          </div>
        </div>
        <div className={s.card}>
          <img width="300px" height="auto" src={img2} alt="nfs2" />
          <div>
            <h4>Need for Speed: Most Wanted</h4>
            <p>Um dos jogos mais marcantes da franquia, trazendo corridas de rua, tuning extremo e uma atmosfera urbana cheia de neon. Seu mundo aberto e a liberdade de customização fizeram dele um clássico entre fãs de velocidade</p>
          </div>
        </div>
        <div className={s.card}>
          <img width="300px" height="auto" src={img3} alt="nfs3" />
          <div>
            <h4>Need for Speed Heat</h4>
            <p>Conhecido pelas perseguições policiais intensas e pela icônica lista Blacklist, ele mistura adrenalina e estratégia em cada corrida. A combinação de carros exóticos, narrativa envolvente e ação constante tornou esse título um dos mais lembrados da série.</p>
          </div>
        </div>
      </section>
      <section className={s.s3} id="s3">
        <iframe
          className={s.vid}
          src="https://www.youtube.com/embed/9ewiJJe_nYI?si=QBAFa5Ym9jjekUK2&autoplay=0"
          title="YouTube video player"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section className={s.s4} id="s4">
        <h3>CONTATO</h3>
      
        <div className={s.formulario}>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome"/>
          <label for="assunto">Mensagem:</label>
          <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>
          <button onclick="enviar()">ENVIAR</button>
        </div>
        <div>
          <div id="saturno-container"></div>
        </div>
      </section>
    </main>
    <footer>
      <a href="https://www.facebook.com" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </footer>
    </>
  )
}

export default App
