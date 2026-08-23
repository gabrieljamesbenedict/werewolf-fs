import "../styles/Home.css"

const Home = ({username, roomId, setUsername, setRoomId}) => {

    const werewolfTitle = "Welcome to Werewolf FS"
    const werewolfDescription = "Werewolf is a popular social deduction party game where Werewolves kill Villagers one-by-one at night while Villagers try to deduce who are the Werewolves."

    return (
        <div class="container">
            <h1 class="container__title">{werewolfTitle}</h1>
            <p class="container__description">{werewolfDescription}</p>

            <div class="container__form">
                <label class="container__label">Username: </label>
                <input class="container__input" type="text" />
                <br />
                <label class="container__label">Room ID: </label>
                <input class="container__input" type="text" />
                <br />
                <button class="container__but">Enter Game</button>
            </div>
        </div>
    )
}

export default Home