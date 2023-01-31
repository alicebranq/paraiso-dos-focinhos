import "./Adote.css"

const Adote = () => {

    return (
        <div>
            <div className="parent-div-adote">
                <div className="child-div-img-adote">
                    <img src="../../../public/img/imgilustrativa-adote.png" width={400} alt="" />
                </div>
                <div className="child-div-Adote-text">
                    <h2 id="chamada-adocao-texto"> Adote um peludinho!</h2>
                    <p id="texto-explicacao-adote">
                    Nossa maior preocupação é garantir o bem estar dos animais oferecidos para adoção. Muitos deles já sofreram maus tratos e abusos e precisamos garantir que não sofram novamente qualquer tipo de privação. Por isso contamos com sua compreensão e paciência, para preencher o questionário de avaliação abaixo. Ele será também muito útil para nos orientar a definir o perfil do animal mais adequando para você.
                    </p>
                    <button className=""> Candidatar-se </button>
                </div>
            </div>

            <div className="child-div-divisao-de-pagina">
                <img className="img-divisao-de-pag" src="../../../public/img/img-divisora-ggatos.png"  alt="" />
            </div>
        </div>
    )
}

export default Adote