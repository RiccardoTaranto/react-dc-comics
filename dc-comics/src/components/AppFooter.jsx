import IconDigital from "../assets/img/buy-comics-digital-comics.png"
import IconMerchandise from "../assets/img/buy-comics-merchandise.png"
import IconSubscription from "../assets/img/buy-comics-subscriptions.png"
import IconShopLocator from "../assets/img/buy-comics-shop-locator.png"
import IconPowerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function AppFooter() {
    // logic here

    //jsx template here
    return (
        <footer>
            <nav>
                <a href=""><img src={IconDigital} alt="" />DIGITAL COMICS</a>
                <a href=""><img src={IconMerchandise} alt="" />DC MERCHANDISE</a>
                <a href=""><img src={IconSubscription} alt="" />SUBSCRIPTION</a>
                <a href=""><img src={IconShopLocator} alt="" />COMIC SHOP LOCATOR</a>
                <a href=""><img src={IconPowerVisa} alt="" />DC POWER VISA</a>
            </nav>

            <section>
                <ul>DC COMICS
                    <li>Character</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Video</li>
                    <li>News</li>
                </ul>
                <ul>SHOP
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
                <ul>DC
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
                <ul>SITES
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </section>

        </footer>
    )

}

