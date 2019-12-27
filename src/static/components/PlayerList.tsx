import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import {
    useTable,
} from 'react-table'
import { orange, grey } from 'shared/styles/colors';
import { trimName} from "shared/utils";

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
        
        console.log()
        return (
            <div className={css(styles.playerTable)}>
                    {
                        players.map((player, index) =>
                        
                            <div className={css(styles.playerRow)} key={index} onClick={() => this.movePlayerToUser(player)}>
                                <div>{player.id}</div>
                                <img src={player.img_url} />
                                <div>{trimName(player.name)}</div>
                                <div>{player.team}</div>
                                <div>{player.rating}</div>
                            </div>
                        )
                    }
            </div>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({
    playerTable:{
        float: "right",
        align: "left",
    },
    playerRow: {
        backgroundColor: "grey",
        padding: "0.6em",
        marginTop: "0.3em",
        display: "flex",
        borderRadius: "5em",
    },
    rating:{

    },
    team:{

    },
    name:{

    },
    imgAvatar:{

    },
    rank:{

    },
});
