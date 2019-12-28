import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { lightenColor, ratingChecker, trimName } from "shared/utils";
import { black } from 'shared/styles/colors';

interface Props {
    athlete: any,
    removePick: any,
    user: any,
}


class PlayerCards extends Component<Props> {
    private constructor(props) {
        super(props);
    }

    ratingSymbol(rating) {

        if (rating >= 93) {
            return "💎"
        }
        if (rating >= 86) {
            return "🔥"
        }
        if (rating >= 81) {
            return "👍"
        }
        if (rating < 80) {
            return "😂"
        }
        return null


    }

    public render() {
        const { athlete, removePick, user } = this.props

        return (
            <div style={{
                backgroundColor: `rgb(${ratingChecker(athlete.rating).color})`,
                //backgroundImage: `linear-gradient(to right, rgb(${ratingChecker(athlete.rating).color}) , rgb(${lightenColor(ratingChecker(athlete.rating).color)}))`
            }}
            className={css(styles.card)} onClick={() => removePick(athlete.id, user.id, athlete)}>

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
                                color: black,
                                backgroundColor: `rgb(${lightenColor(ratingChecker(athlete.rating).color)})`,
                            }}
                            >{athlete.rating}</div></div>
                    </div>
                </div>
                <div style={{
                    backgroundColor: `rgb(${lightenColor(ratingChecker(athlete.rating).color)})`,
                }}
                    className={css(styles.emoji)}>
                    {ratingChecker(athlete.rating).emoji}
                </div>
            </div>
        );
    }
}

export default PlayerCards;

const styles = StyleSheet.create({
    upperSection: {
        paddingTop: "1.3em",
        fontWeight: "bold",
    },
    belowSection: {
        paddingTop: "0.5em",
    },
    card: {
        filter: " drop-shadow(0.2em 0.2em 0.2em grey)",
        borderRadius: "1em",
        width: "15em",
        height: "5em",
    },
    emoji: {
        float: "right",
        marginTop: "-3.8em",
        marginRight: "-4.7em",
        width: "2em",
        height: "2em",
        borderRadius: "0em 1em 0em 1em",
        paddingTop: "0.6em",
        paddingLeft: "0.45em"
    },
    athleteImg: {
        display: "inline",
        borderRadius: "20em",
        width: "5em",
        margin: "0.7em",
        float: "left",
    },
    rating: {
        paddingTop: "0.45em",
        textAlign: "center",
        float: "right",
        width: "1.7em",
        height: "1.7em",
        borderRadius: "1em",
        
        display: "inline",
        marginRight: "3em",
        marginTop: "-1.3em"
    }
});
