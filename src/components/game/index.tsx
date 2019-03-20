import moment from "moment"
import * as React from "react"
import { Game as GameType } from "types/index"
import styles from "./styles"

type Props = {
    game: GameType
}

type State = {}

export default class Game extends React.Component<Props, State> {
    render() {
        const { game } = this.props
        const actualGame = game.competitions[0]
        const { competitors } = actualGame
        // const status = actualGame.status.type.name ? "STATUS_SCHEDULED"
        const today = moment(new Date(game.date)).isSame(moment(), "day")
        return (
            <div key={game.uid} style={styles.game}>
                <p>
                    {today
                        ? moment(game.date).format("hh:mm A")
                        : actualGame.status.type.detail}
                </p>
                <div>
                    {competitors.map(c => {
                        return (
                            <div style={styles.team} key={c.team.uid}>
                                <img
                                    style={styles.teamLogo}
                                    width="40"
                                    height="40"
                                    src={c.team.logo}
                                />
                                <p>{c.team.displayName}</p>
                                {actualGame.status.type.state !== "pre" && (
                                    <p style={styles.score}>{c.score}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
