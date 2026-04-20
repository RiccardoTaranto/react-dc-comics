import IconDigital from "../assets/img/buy-comics-digital-comics.png"
import IconMerchandise from "../assets/img/buy-comics-merchandise.png"
import IconSubscription from "../assets/img/buy-comics-subscriptions.png"
import IconShopLocator from "../assets/img/buy-comics-shop-locator.png"
import IconPowerVisa from "../assets/img/buy-dc-power-visa.svg"
import BgFooter from "../assets/img/footer-bg.jpg"
import BgLogo from "../assets/img/dc-logo-bg.png"
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

            <div className="list_footer" style={{ backgroundImage: `url(${BgLogo})` }}>
                <h3>DC COMICS</h3>
                <ul>
                    <li>Character</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Video</li>
                    <li>News</li>
                </ul>

                <h3>SHOP</h3>
                <ul>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>

                <h3>DC</h3>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy (new)</li>
                    <li>As Choice</li>
                    <li>Adveretising</li>
                    <li>Job</li>
                    <li>Subscriptiuon</li>
                    <li>Talent Workshop</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>

                <h3>SITES</h3>
                <ul>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>


            <div className="footer_bottom">
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

