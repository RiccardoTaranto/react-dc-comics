import AppLogo from "../assets/img/dc-logo.png"

export default function AppHeader() {
    // logic here
    const menu = [
        { text: "CHARACTER", url: "#" },
        { text: "COMICS", url: "#" },
        { text: "MOVIES", url: "#" },
        { text: "TV", url: "#" },
        { text: "GAMES", url: "#" },
        { text: "COLLECTIBLES", url: "#" },
        { text: "VIDEOS", url: "#" },
        { text: "FANS", url: "#" },
        { text: "NEWS", url: "#" },
        { text: "SHOP", url: "#" }
    ]

    //jsx template here
    return (
        <header>
            <img src={AppLogo} alt="DC LOGO" />

            <nav>
                {menu.map((item) =>
                    <a href="#" key={item.text}></a>
                )}
            </nav>
        </header>
    )
}