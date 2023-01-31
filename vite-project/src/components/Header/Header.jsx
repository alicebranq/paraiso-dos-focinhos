import './Header.css'

const Header = () => {

    return (
        <nav className="header-parent-div">

            <div className="child-div-img-logo">
                <a href="/">
                    <img src="../../public/img/logo-paraiso.png" width={180} alt="" />
                </a>
            </div>

            <div className="child-div-info-text">
                <a className='info-text-content' href="" target="_blank">
                    Voluntarie-se!</a>
                <a className='info-text-content' href="https://docs.google.com/forms/d/e/1FAIpQLSfaibov2PC2q8TvEOHTcQkmC-acZDQF3XE0vO5JnHuKJv-bYw/viewform" target="_blank"> 
                    Adote</a>
                <a className='info-text-content' href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=8d9e1f33bd41a413971c162c8443e9795ba8c3477033bda88db77a090ea2fcfc&e=true#rmcl" target="_blank"> 
                    Doações</a>
            </div>
        </nav>
    )
}

export default Header
