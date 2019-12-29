import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { lightenColor, ratingChecker, trimName } from "shared/utils";
import { purple, white, diamond, black, orange } from 'shared/styles/colors';

interface Props {
    addPlayerToUser: any,
    players: Array<any>,
    currentPicker: Number,
}

class PlayerList extends Component<Props> {
    private constructor(props) {
        super(props);
    }

    movePlayerToUser(player) {
        const { players, currentPicker } = this.props
        const playersWithoutMovedPlayer = players.filter((item) => item !== player)
        this.props.addPlayerToUser(player, currentPicker, playersWithoutMovedPlayer)

    }

    public render() {
        const { addPlayerToUser } = this.props
        const {
            players,
        } = this.props;

        let listItems: any = []

        players.map((athlete, index) =>
            listItems.push(
                <div style={{
                    backgroundColor: `rgb(${ratingChecker(athlete.rating).color})`,
                    //backgroundImage: `linear-gradient(to right, rgb(${ratingChecker(athlete.rating).color}) , rgb(${lightenColor(ratingChecker(athlete.rating).color)}))`
                }}
                    className={css(styles.card)}
                    key={index}
                    onClick={() => this.movePlayerToUser(athlete)}
                >

                    <div>
                        <img className={css(styles.athleteImg)} src={athlete.img_url} />
                    </div>
                    <div>
                        <div className={css(styles.upperSection)}>
                            {trimName(athlete.name)}
                        </div>
                        <div className={css(styles.belowSection)}>
                            {athlete.position}
                            <div>
                                <div className={css(styles.rating)}
                                    style={{
                                        color: `rgb(${ratingChecker(athlete.rating).color})`,
                                    }}
                                >
                                    {athlete.rating} {athlete.team}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: `rgb(${lightenColor(ratingChecker(athlete.rating).color)})`,
                    }}
                        className={css(styles.emoji)}>
                        {ratingChecker(athlete.rating).emoji}
                    </div>
                </div>
            )

        )

        return (
            <div className={css(styles.playerTable)}>
                {listItems}
            </div>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({
    playerTable: {
        float: "right",
        align: "left",
        marginRight: "2em",
    },
    upperSection: {
        paddingTop: "1.1em",
        fontWeight: "bold",
    },
    belowSection: {

    },
    card: {
        filter: " drop-shadow(0.2em 0.2em 0.2em grey)",
        borderRadius: "1em",
        width: "20em",
        height: "4em",
        margin: "1em",
    },
    emoji: {
        float: "right",
        marginTop: "-3.1em",

        width: "2em",
        height: "2em",
        borderRadius: "0em 1em 0em 1em",
        paddingTop: "0.6em",
        paddingLeft: "0.45em"
    },
    athleteImg: {
        display: "inline",
        borderRadius: "20em",
        margin: "1em",
        float: "left",
    },
    rating: {
        paddingTop: "0.45em",
        textAlign: "center",
        float: "right",
        width: "4em",
        height: "1.7em",
        borderRadius: "1em",
        backgroundColor: black,
        display: "inline",
        marginRight: "3em",
        marginTop: "-2em"
    }
});
