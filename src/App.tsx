import axios from "axios"
import "babel-polyfill"
import * as React from "react"
import { render } from "react-dom"
import { Game as GameType } from "types/index"
import Game from "./components/game"
import "./styles.css"

type State = {
    games?: GameType[]
}

class App extends React.Component<{}, State> {
    state = {
        games: null
    }
    componentDidMount() {
        this.fetchGames()
    }
    fetchGames = async () => {
        const games = await axios
            .get(
                "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?lang=en&region=us&calendartype=blacklist&limit=36&dates=20190319-20190323&"
            )
            .then(res => res.data.events)
        games.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        this.setState({ games })
    }
    render() {
        const { games } = this.state
        return (
            <div>
                <div>Total: {games ? games.length : 0}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {games && games.map(g => <Game key={g.uid} game={g} />)}
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"))
