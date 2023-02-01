import './Header.css'

const Header = () => {

    return (
        <nav className="header-parent-div">

            <div className="child-div-img-logo">
                <a href="/">
                    <img src="../../public/img/logo-paraiso.png" width={270} alt="" />
                </a>
            </div>

            <div className="child-div-info-text">
                <a className='info-text-content' href="https://docs.google.com/forms/u/0/d/1GLh6auH1twhzW-bBLuqTj8NcVIe0eEvsqiV13CpBXl8/viewform?fbclid=IwAR0o3bkA9EISoPIioVETn5AverFjpN9mBgrUZAu1zSL9eLZf45nPkq1RA_o&edit_requested=true" target="_blank">
                    Voluntarie-se!</a>
                <a className='info-text-content' href="https://docs.google.com/forms/d/e/1FAIpQLSfaibov2PC2q8TvEOHTcQkmC-acZDQF3XE0vO5JnHuKJv-bYw/viewform" target="_blank"> 
                    Adote</a>
                <a className='info-text-content' href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=8d9e1f33bd41a413971c162c8443e9795ba8c3477033bda88db77a090ea2fcfc&e=true#rmcl" target="_blank"> 
                    Doações</a>
                <a className='info-text-content' href="https://www.kickante.com.br/vaquinha-online/dia-de-doar-vamos-junto-com-a-paraiso-dos-focinhos-nesta-corrente-para-fazermos-castracoes-em-todo-rio-de-janeiro" target="_blank">
                    Campanha do Kickante</a>
                <a className='info-text-content' href="https://rifei.co/ajude-os-peludinhos-a-nao-sofrerem-mais-com-o-calor" target="_blank">
                    Rifa Moto</a>
            </div>
        </nav>
    )
}

export default Header
