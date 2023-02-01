import Header from "../components/Header/Header"
import Gallery from "../components/Carousel/Carousel"
import SobreNos from "../components/SobreNos/SobreNos"
import Adote from "../components/Adote/Adote"
import Footer from "../components/Footer/Footer"

const Home = () => {

    return (
        <div>
            {/* <NavbarHeader /> */}
            <Header />
            <Gallery />
            <SobreNos />
            <img src="../../public/img/img-divisora-ggatos.png" width={'100%'} alt="" />
            <br /><br /><br /><br />
            <Adote />
            <Footer />
        </div>
    )

}

export default Home
