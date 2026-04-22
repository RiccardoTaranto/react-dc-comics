import comics from "./comics"

export default function AppMain() {
    // logic here

    // jsx template here
    return (
        <main>

            <div>
                {comics.map((comic) => (
                    <div key={comic.id}>
                        <img src={comic.thumb} alt="" />
                        <h3>{comic.series}</h3>
                    </div>
                ))}
            </div>

        </main>
    )
}