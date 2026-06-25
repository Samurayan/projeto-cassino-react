import "./teste.css"

function bla() {
    return(
        <>
            <div id="header">
                <h1>
                    <img src="../public/spade.svg" alt="" />
                    Cassino
                </h1>

                <button>Entrar</button>
            </div>

            <main id="principal">
                <div id="saldo">
                    <img width={40} src="../public/wallet.svg" alt="" />
                    <div id="sdl">
                        <h4>Saldo atual</h4>
                        <h2>R$ 1.00,00</h2>
                    </div>
                </div>

                <div id="cash">
                    <div id="jogos">
                        <div className="models">
                            <img width={180} src="../public/caca-niqueis.webp" alt="" />
                            <h2>Slots</h2>
                            <h3>Caça Ní-niqueis</h3>
                        </div>
                        <div className="models">
                            <img width={180} src="../public/caca-niqueis.webp" alt="" />
                            <h2>Slots</h2>
                            <h3>Caça Ní-niqueis</h3>
                        </div>
                        <div className="models">
                            <img width={180} src="../public/caca-niqueis.webp" alt="" />
                            <h2>Slots</h2>
                            <h3>Caça Ní-niqueis</h3>
                            <button>Jogar</button>
                        </div>
                    </div>
                </div>
                
                <div id="historico">
                    <img src="../public/clock-counter-clockwise.svg" alt="" />
                    <h2>Ultimas apostas</h2>

                    <div id="hts">
                        <div className="history">
                            <img src="../public/caret-circle-up.svg" alt="" />
                            <h2>Voce ganhou Em Dados</h2>
                            <h2>+ R$ 50,00</h2>
                        </div>
                        <div className="history">
                            <h2><img src="../public/caret-circle-down.svg" alt="" />4hgbeh</h2>
                            <h2>awegwg</h2>
                        </div>
                        <div className="history">
                            <h2><img src="../public/caret-circle-up.svg" alt="" />agrarg</h2>
                            <h2>aergagr</h2>
                        </div>
                    </div>
                    
                </div>

            </main>
            <footer>&copy; Cassino JS - Samurayan Version</footer>
        </>
    )
}

export default bla
