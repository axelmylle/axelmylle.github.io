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

    renderTableData() {
        const { users, removePick } = this.props
        let tableData: any = []
        users.map((user, index) => {
            tableData.push(
                user.players.map((athlete, index) => {
                        tableData.push(<PlayerCards athlete={athlete} removePick={removePick} user={user} />)
                    })
                )
        })
        return tableData
    }

    renderTableHeader() {
        const { numberOfPicks } = this.props
        let pickHeader: any = []
        for (let i = 0; i < numberOfPicks; i++) {
            pickHeader.push(<th key={i}>pick {i + 1}</th>)
        }
        return pickHeader
    }

    public render() {

        return (
            <table>
                <tbody>
                    <tr><th>picks</th>{this.renderTableHeader()}</tr>
                    <tr><th>users</th></tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        );
    }

}

export default PlayerList;

const styles = StyleSheet.create({

});
