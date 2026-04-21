import IconDigital from "../assets/img/buy-comics-digital-comics.png"
import IconMerchandise from "../assets/img/buy-comics-merchandise.png"
import IconSubscription from "../assets/img/buy-comics-subscriptions.png"
import IconShopLocator from "../assets/img/buy-comics-shop-locator.png"
import IconPowerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function AppBlueBanner() {
    // Logic here

    // jsx template here
    return (

        <nav className="blue_banner">
            <a href=""><img src={IconDigital} alt="" />DIGITAL COMICS</a>
            <a href=""><img src={IconMerchandise} alt="" />DC MERCHANDISE</a>
            <a href=""><img src={IconSubscription} alt="" />SUBSCRIPTION</a>
            <a href=""><img src={IconShopLocator} alt="" />COMIC SHOP LOCATOR</a>
            <a href=""><img src={IconPowerVisa} alt="" />DC POWER VISA</a>
        </nav>

    )
}