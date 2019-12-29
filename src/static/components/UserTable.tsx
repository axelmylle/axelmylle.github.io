import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import PlayerCards from 'shared/components/PlayerCards';
import { orange, grey, purple, white, black } from 'shared/styles/colors';

interface Props {
    users: any,
    numberOfPicks: Number,
    removePick: any,
    currentPicker: number,
    updateCurrentPicker: any,
}


class PlayerList extends Component<Props> {
    private constructor(props) {
        super(props);
    }

    renderTableData(user) {
        const { removePick } = this.props
        let playersPerUser: any = []

        user.players.map((athlete, index) => {
            playersPerUser.push(<PlayerCards athlete={athlete} removePick={removePick} user={user} />)
        })
        return playersPerUser
    }

    updatePicker(boolean) {
        const { updateCurrentPicker } = this.props
        //updateCurrentPicker(boolean)
    }

    renderTableHeader() {

        const { users, currentPicker } = this.props

        return (<div className={css(styles.column)}>{this.renderTableData(users[currentPicker - 1])}</div>)
    }

    public render() {
        const { users, currentPicker, updateCurrentPicker } = this.props
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.displayValue)}>{users[currentPicker - 1].name}</div>
                <div className={css(styles.flex)}>
                    {this.renderTableHeader()}
                </div>
                <div className={css(styles.bottom)}>
                    <button className={css(styles.changeValueButton)} onClick={() => this.updatePicker(true)}>Download Tournament Bracket</button>
                    <button className={css(styles.changeValueButton)} onClick={() => this.updatePicker(true)}>Download Rosters</button>
                </div>
            </div>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({
    container: {
        width: "70vw",
        height: "100vh",
        float: "left",
        alignContent: "center",
        justifyContent: "center"
    },
    name: {
        textAlign: "center",
        alignContent: "center",
        paddingTop: "2em",
    },
    bottom:{
        position: "absolute",
        margin: "auto",
        bottom: "2em"
    },
    flex: {
        width: "inherit",
        display: "flex",
        flexWrap: "wrap",
    },
    column: {
        marginLeft: "11em",
        display: "flex",
        flexWrap: "wrap",
    },
    changeValueButton: {
        marginLeft: "29em",
        marginTop: "1em",
        marginBottom: "3em",
        display: "block",
        backgroundColor: orange,
        textAlign: "center",
        width: "17em",
        height: "3em",
        borderRadius: "5em",
        color: white,
        fontSize: 20,
        alignSelf:"center",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    },
    displayValue: {
        marginLeft: "30em",
        marginTop: "2em",
        marginBottom: "3em",
        backgroundColor: `rgb(${purple})`,
        textAlign: "center",
        width: "15em",
        paddingTop: "1em",
        height: "3em",
        borderRadius: "5em",
        color: white,
        fontSize: 20,
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    },
});
