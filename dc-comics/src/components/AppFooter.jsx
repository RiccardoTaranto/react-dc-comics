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
            title: "DC COMICS",
            link: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
        },
        {
            title: "SHOP",
            link: ["Shop DC", "Shop DC Collectibles"]
        },
        {
            title: "DC",
            link: ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
        },
        {
            title: "SITES",
            link: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
        }
    ]

    //jsx template here
    return (
        <footer style={{ backgroundImage: `url(${BgFooter})` }}>

            <AppBlueBanner />

            <div className="list_footer" style={{ backgroundImage: `url(${BgLogo})` }}>

                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.link.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
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