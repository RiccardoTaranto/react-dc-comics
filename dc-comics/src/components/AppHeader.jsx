import AppLogo from "../assets/img/dc-logo.png"

export default function AppHeader() {
    // logic here
    const menu = ["CHARACTER", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]

    //jsx template here
    return (
        <header>
            <img src={AppLogo} alt="DC LOGO" />
            <nav>
                <a href="">CHARACTER</a>
                <a href="">COMICS</a>
                <a href="">MOVIES</a>
                <a href="">TV</a>
                <a href="">GAMES</a>
                <a href="">COLLECTIBLES</a>
                <a href="">VIDEOS</a>
                <a href="">FANS</a>
                <a href="">NEWS</a>
                <a href="">SHOP</a>
            </nav>
        </header>
    )
}