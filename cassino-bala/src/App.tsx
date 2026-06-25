import './App.css'

function App() {

  return (
    <>
    {/* Titulo container */}
      <div id="title">
        <div id="tt">
          <img src="../public/spade.svg" alt="uma imagem" />
          <h2><strong>Cassino JS</strong></h2>
        </div>
        <button id="login-btn"><h2>Login</h2></button>
      </div>

      {/* Container principal */}
      <div id="content">

        {/* Parte do saldo */}
        <div id="saldo">
          <img width={80} src="../public/wallet.svg" alt="imagem" />
          <div id="notas">
            <h4>Saldo atual</h4>
            <h1>R$ 1.000,00</h1>
          </div>
        </div>

        {/* */}
        <div id="cash">
          <div id="bla">
            <img src="../public/game-controller.svg" alt="imagem" />
            <h3>Select your game</h3>
          </div>

          {/* */}
          <div id="select-games">

            {/* */}
            <div className="games">
              <img width={180} src="../public/caca-niqueis.webp" alt="imagem" />
              <h2>Slots</h2>
              <h3>Máquina caça-niqueis</h3>
              <button className="play-btn">Jogar</button>
            </div>
            <div className="games" >
              <img width={180} src="../public/dados.webp" alt="imagem" />
              <h2>Slots</h2>
              <h3>Máquina caça-niqueis</h3>
              <button className="play-btn">Jogar</button>
            </div>
            <div className="games">
              <img width={180} src="../public/baralho.webp" alt="imagem" />
              <h2>Slots</h2>
              <h3>21</h3>
              <button className="play-btn">Jogar</button>
            </div>
          </div>
        </div>

        {/* */}
        <div id="historyc">
          <div>

          
          </div>

          {/* */}
          <div id="stats">
            <div className="apostas">
              <div className="resp">
                <img src="../public/caret-circle-up.svg" alt="" />
                <h4>Você ganhou em Dados</h4>
              </div>
              <h4>+ R$ 50,00</h4>
            </div>
            <div className="apostas">
              <div className="resp">
                <img src="../public/caret-circle-down.svg" alt="" />
                <h4>Você perdeu em Slots</h4>
              </div>
              <h4>-R$ 20,00</h4>
            </div>
            <div className="apostas">
              <div className="resp">
                <img src="../public/caret-circle-up.svg" alt="" />
                <h4>Você ganhou em 21</h4>
              </div>
              <h4>+R$ 10,00</h4>
            </div>
          </div>
        </div>
      </div>
      <footer>&copy; Cassino JS - Samurayan Version</footer>
    </>
  )
}

export default App
