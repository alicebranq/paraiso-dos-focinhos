import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer-component">

            <div className="parent-div-midias-sociais">
                <h2>Acesse também nossas redes sociais:</h2>
                <div className="child-div-midias-sociais">
                    <a href="https://www.facebook.com/ongparaisodosfocinhos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" 
                            width={60} alt="" />
                    </a>
                    <a href="https://www.instagram.com/ongparaisodosfocinhos/?hl=pt">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
                            width={60} alt="" />
                    </a>
                    <a href="https://www.tiktok.com/@ongparaisodosfocinhos?_d=dj45aci9i31688&language=pt&sec_uid=MS4wLjABAAAAlpfpmsh2jafjFVF0VUKi2T0tgUYZYOH6Nwvn71P8R3unfu7qLhoNKGEyDkVaIr5y&share_author_id=6873125894418023430&u_code=deec6f349hkg4l&timestamp=1631815310&us=&_r=1">
                        <img src="https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png" 
                            width={60} alt="" />
                    </a>
                </div>
            </div>
{/* 
            <div className="child-div-info-footer">
                <p>ONG criada para proteger animais de rua. </p>
                <p>(CNPJ) 19.614.984/0001-29.</p>
                <br />
                <div className="child-div-redirect">
                    <p> <a>Apadrinhe um peludo! </a></p>
                    <p> <a>Adote </a></p>
                    <p> <a>Seja um voluntário</a></p>
                </div>
            </div> */}

        </footer>
    )
}

export default Footer

            {/* <div className="parent-div-social-media">
                <span className="child-div-social-media">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" 
                        width={70} alt="" />
                    <p className="description-social-media">Facebook</p>
                </span>
                <span className="child-div-social-media">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
                        width={70} alt="" />
                    <p className="description-social-media">Instagram</p>
                </span>
                <span className="child-div-social-media">
                    <img src="https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png" 
                        width={70} alt="" />
                    <p className="description-social-media">TikTok</p>
                </span>
                <span className="child-div-social-media">
                    <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" 
                        width={70} alt="" />
                    <p className="description-social-media">YouTube</p>
                </span>
            </div> */}
