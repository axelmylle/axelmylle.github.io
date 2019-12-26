import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { lightenColor, ratingChecker, performanceToClass } from "shared/utils";
import { orange } from 'shared/styles/colors';

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
        return (
            <div onClick={() => removePick(athlete.id, user.id, athlete)}>
                <div>
                    <img className={css(styles.athleteImg)} src={athlete.img_url} />
                    <div className={performanceToClass(
                        ratingChecker(athlete.rating)
                    )}>{athlete.rating}</div>
                </div>
                <div>
                    {athlete.name}
                </div>
            </div>
        );
    }
}

export default PlayerCards;

const styles = StyleSheet.create({
    upperSection: {
        display: "inline",
    },
    belowSection: {

    },
    athleteImg: {
        display: "inline",
        borderRadius: "5em"
    },
    rating: {

    }
});
