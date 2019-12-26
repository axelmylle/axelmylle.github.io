import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import {
    useTable,
} from 'react-table'
import { orange } from 'shared/styles/colors';

interface Props {
    addPlayerToUser: any,
    players: Array<any>,
    currentPicker: Number,
}

class PlayerList extends Component<Props> {
    private constructor(props) {
        super(props);
    }

    movePlayerBackToList() {
        console.log('hi')
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

        return (
            <table className={css(styles.playerTable)}>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>team</th>
                        <th>rating</th>
                    </tr>
                    {
                        players.map((player, index) =>
                            <tr className={css(styles.playerRow)} key={index} onClick={() => this.movePlayerToUser(player)}>
                                <td>{player.id}</td>
                                <td><img src={player.img_url} />{player.name}</td>
                                <td>{player.team}</td>
                                <td>{player.rating}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({
    playerTable: {
        marginLeft: "50vw",
        height: "100vh",
        float: "left",
        align: "left",
    },
    playerRow: {
        backgroundColor: orange,
        borderRadius: "20em",
        paddingTop: "20em",
        marginTop: "20em"
    },
});
