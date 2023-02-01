import "./Adote.css";

const Adote = () => {

    return (
        <div className="parent-div-">
            <div className="parent-div-adote">
                <div className="child-div-img-adote">
                    <img src="../../../public/img/imgilustrativa-adote.png" width={400} alt="" />
                </div>
                <div className="child-div-Adote-text">
                    <h2 id="chamada-adocao-texto"> Adote um peludinho!</h2>
                    <div className="child-div-text-adocao-explicacao">
                        <p id="texto-explicacao-adote">
                            Nossa maior preocupação é garantir o bem estar dos animais oferecidos para adoção. Muitos deles já sofreram maus tratos e abusos e precisamos garantir que não sofram novamente qualquer tipo de privação. 
                        </p>
                        <p id="texto-explicacao-adote"> 
                            Contamos com sua compreensão e paciência para preencher o questionário de avaliação abaixo. Ele será também muito útil para nos orientar a definir o perfil do animal mais adequando para você.
                        </p>
                    </div>
                    <div className="child-div-cantidatesebutton"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaibov2PC2q8TvEOHTcQkmC-acZDQF3XE0vO5JnHuKJv-bYw/viewform" target="_blank">
                        <p className="element-candidatesebutton"> Candidate-se! </p> </a>

                    </div>
                </div>
            </div>
        <div className="separacao-div"> </div>

        </div>
    )
}

export default Adote