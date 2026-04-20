import IconDigital from "../assets/img/buy-comics-digital-comics.png"
import IconMerchandise from "../assets/img/buy-comics-merchandise.png"
import IconSubscription from "../assets/img/buy-comics-subscriptions.png"
import IconShopLocator from "../assets/img/buy-comics-shop-locator.png"
import IconPowerVisa from "../assets/img/buy-dc-power-visa.svg"
import BgFooter from "../assets/img/footer-bg.jpg"
import IconFacebook from "../assets/img/footer-facebook.png"
import IconTwitter from "../assets/img/footer-twitter.png"
import IconYoutube from "../assets/img/footer-youtube.png"
import IconPinterest from "../assets/img/footer-pinterest.png"
import IconPeriscope from "../assets/img/footer-periscope.png"

export default function AppFooter() {
    // logic here

    //jsx template here
    return (
        <footer style={{ backgroundImage: `url(${BgFooter})` }}>
            <nav>
                <a href=""><img src={IconDigital} alt="" />DIGITAL COMICS</a>
                <a href=""><img src={IconMerchandise} alt="" />DC MERCHANDISE</a>
                <a href=""><img src={IconSubscription} alt="" />SUBSCRIPTION</a>
                <a href=""><img src={IconShopLocator} alt="" />COMIC SHOP LOCATOR</a>
                <a href=""><img src={IconPowerVisa} alt="" />DC POWER VISA</a>
            </nav>



            <div className="footer-bottom">
                <button>SIGN-UP NOW!</button>

                <div className="social">
                    <h3>FOLLOW US</h3>
                    <a href=""><img src={IconFacebook} alt="Facebook" /></a>
                    <a href=""><img src={IconTwitter} alt="Twitter" /></a>
                    <a href=""><img src={IconYoutube} alt="YouTube" /></a>
                    <a href=""><img src={IconPinterest} alt="Pinterest" /></a>
                    <a href=""><img src={IconPeriscope} alt="Periscope" /></a>
                </div>
            </div>

        </footer>
    )

}

