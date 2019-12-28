import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

interface State {
    homeOnTopState: Boolean | null,
    hoveredTeamId: Number | null,
}

interface Props {
    users: any,
}

class TournamentBracket extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            homeOnTopState: true,
            hoveredTeamId: null
          };
        
    }

    public render() {
        return(
            <div>

            </div>
        );
}
}

export default TournamentBracket

const styles = StyleSheet.create({
});
