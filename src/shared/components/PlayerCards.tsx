import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { lightenColor, ratingChecker, performanceToClass } from "shared/utils";
import { purple, white, diamond, black, orange } from 'shared/styles/colors';

interface Props {
    athlete: any,
    removePick: any,
    user: any,
}


class PlayerCards extends Component<Props> {
    private constructor(props) {
        super(props);
    }

    public render() {
        const { athlete, removePick, user } = this.props
        console.log(`rgb(${lightenColor(diamond)})`)
        console.log(`rgb(${lightenColor(white)})`)
        console.log(`rgb(${lightenColor(black)})`)
        console.log(`rgb(${lightenColor(purple)})`)

        return (
            <div className={css(styles.card)} onClick={() => removePick(athlete.id, user.id, athlete)}>
                <div>
                    <img className={css(styles.athleteImg)} src={athlete.img_url} />
                </div>
                <div>
                <div className={css(styles.upperSection)}>
                    {athlete.name}
                </div>
                <div className={css(styles.belowSection)}>
                    {athlete.position}
                    <div className={performanceToClass(
                        ratingChecker(athlete.rating)
                    )}>
                        <div className={css(styles.rating)}>{athlete.rating}</div></div>
                </div>
                </div>
                <div className={css(styles.emoji)}>

                </div>
            </div>
        );
    }
}

export default PlayerCards;

const styles = StyleSheet.create({
    upperSection: {
        paddingTop: "1.3em",
    },
    belowSection: {
        paddingTop: "0.5em",
    },
    card: {
        backgroundColor: `rgb(${diamond})`,
        borderRadius: "1em",
        width: "15em",
        height: "5em",
        filter:" drop-shadow(0.2em 0.2em 0.2em grey)",
    },
    emoji:{
        float: "right",
        marginTop: "-3em",
        marginRight: "-4em",
        backgroundColor: "black",
        width: "2em",
        height: "2em",
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
        textAlign:"center",
        float: "right",
        color: `rgb(${diamond})`,
        width: "1.7em",
        height: "1.7em",
        borderRadius: "1em",
        backgroundColor: black,
        display: "inline",
        marginRight: "3em",
        marginTop: "-1.3em"
    }
});
