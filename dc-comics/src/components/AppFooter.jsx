import BgFooter from "../assets/img/footer-bg.jpg"
import BgLogo from "../assets/img/dc-logo-bg.png"
import IconFacebook from "../assets/img/footer-facebook.png"
import IconTwitter from "../assets/img/footer-twitter.png"
import IconYoutube from "../assets/img/footer-youtube.png"
import IconPinterest from "../assets/img/footer-pinterest.png"
import IconPeriscope from "../assets/img/footer-periscope.png"
import AppBlueBanner from "./AppBlueBanner"

export default function AppFooter() {
    // logic here
    const footerSections = [
        {
            title: "DC COMICS"
            link: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
        },
        {
            title: "SHOP"
            link: ["Shop DC", "Shop DC Collectibles"]
        },
        {
            title: "DC"
            link: ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
        },
        {
            title: "SITES"
            link: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
        }
    ]

    //jsx template here
    return (
        <footer style={{ backgroundImage: `url(${BgFooter})` }}>

            <AppBlueBanner />

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

