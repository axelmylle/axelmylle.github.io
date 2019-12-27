import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import {
    useTable,
} from 'react-table'
import PlayerCards from 'shared/components/PlayerCards';

interface Props {
    users: any,
    numberOfPicks: Number,
    removePick: any,
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
            playersPerUser.push(<hr />)
        })
        return playersPerUser
    }

    renderTableHeader() {
        let columnPerUser: any = []
        const { users } = this.props
        users.map((user) => {
            columnPerUser.push(<div className={css(styles.column)}><h1>{user.name}</h1>{this.renderTableData(user)}</div>)
        })
        return columnPerUser
    }

    public render() {

        return (
                    <div className={css(styles.flexContainer)}>
                    {this.renderTableHeader()}
                    </div>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({
    flexContainer:{
        width: "60vw",
        display: "flex",
        float: "left",
    },
    column:{
        marginLeft: "5em",
        flex: "wrap",
    }
});
