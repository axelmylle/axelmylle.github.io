import React, { Component } from 'react';
import Server from 'services/Server/Server';
import yetiLogo from 'static/images/yeti-head.png';
import { connect } from "react-redux";
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import { ReactComponent as GreekFreak } from 'static/svgs/greek-freak.svg';
import { orange, purple, grey, white } from 'shared/styles/colors';
import { HomeActions } from "modules/home/dux/index";
import { StoreState } from "types/state";

interface Props {
  match: any;
  dispatch: any;
}
interface State {
  error: string | null;
  numberOfPicks: number,
  users: Array<any>;
}

class App extends Component<Props, State> {
  private constructor(props) {
    super(props);
    this.state = {
      error: null,
      numberOfPicks: 10,
      users: [],
    };
  }

  decrementNumberOfUsers = () => {
    const { users } = this.state
    const { dispatch } = this.props
    if (users.length === 0) {
      this.setState({ error: `There can't be less than 0 players!` })
    } else {
      users.pop()
      dispatch(HomeActions.removeUser())
    }
  };

  incrementNumberOfUsers = () => {
    const { users } = this.state
    const { dispatch } = this.props

    this.setState({ error: null })
    users.push({ id: users.length, name: '', players: [] })
    dispatch(HomeActions.addUser({ id: users.length, name: '', players: [] }))
  }

  handleChangeName = (index, event) => {
    const { users } = this.state
    users[index].name = event.target.value
    this.setState({ users })
  }

  public render() {
    const { users, numberOfPicks, error } = this.state;

    return (
      <div className={css(styles.app)}>
        <div className={css(styles.title)}><h1>NBA 2K Draft</h1></div>

        <div className={css(styles.greekFreak)}>
          <GreekFreak width="40vw" height="40vh" />
        </div>
        <br />
        <div className={css(styles.displayTitle)}>
          <h3>Number of Players</h3>
        </div>
        <div className={css(styles.userSelection)}>
          <button className={css(styles.changeValueButton)} onClick={this.decrementNumberOfUsers}>-</button>

          <div className={css(styles.displayValue)}>
            {users.length}
          </div>
          <button className={css(styles.changeValueButton)} onClick={this.incrementNumberOfUsers}>+</button>
        </div>
        <div className={css(styles.userInputs)}>
        {
          users.map((player, index) => (
            <input className={css(styles.inputName)} key={index} onChange={(event) => this.handleChangeName(index, event)} value={player.name}></input>
          ))
        }
        </div>
        <div className={css(styles.displayTitle)}>
          <h3>Number of Picks</h3>
        </div>
        <div className={css(styles.userSelection)}>
          <button className={css(styles.changeValueButton)} onClick={() => this.setState({ numberOfPicks: numberOfPicks - 1 })}>-</button>
          <div className={css(styles.displayValue)}>{numberOfPicks}</div>
          <button className={css(styles.changeValueButton)} onClick={() => this.setState({ numberOfPicks: numberOfPicks + 1 })}>+</button>
        </div>
        <div className={css(styles.userSelection)}>
        <Link to="/draft">
          <div className={css(styles.nextPageButton)}>  Go draft!
          </div>
        </Link>
        </div>
        {error}
      </div>
    );
  }
}

const mapStateToProps = ({ home }: StoreState) => ({ home });
export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  app: {
    width: '100vw',
    height: '100vh',
    transition: '0.3s',
    backgroundColor: grey,
  },
  title: {
    margin: "auto",
    textAlign: "center",
    paddingTop: "3em",
  },
  userSelection: {
    display: "flex",
    justifyContent: "center",
  },
  userInputs:{
    display: "flex",
    justifyContent: "center",
  },
  displayTitle: {
    margin: "auto",
    textAlign: "center",
    paddingBottom: "1em",
    paddingTop: "1em"
  },
  greekFreak: {
    margin: "auto",
    marginTop: "3em",
    textAlign: "center",
    display: 'block',
  },
  inputName: {
    display: "inline",
  },
  changeValueButton: {
    backgroundColor: orange,
    textAlign: "center",
    padding: "auto",
    marginTop: "0.6em",
    marginLeft: "1em",
    marginRight: "1em",
    width: "3em",
    height: "3em",
    borderRadius: "5em",
    fontWeight: "bold",
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    cursor: "pointer",
  },
  displayValue: {
    backgroundColor: `rgb(${purple})`,
    textAlign: "center",
    width: "3em",
    paddingTop: "1em",
    height: "3em",
    borderRadius: "5em",
    color: white,
    fontWeight: "bold",
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
  },
  optionSection: {
    margin: "auto",
  },
  nextPageButton: {
    width: '8em',
    height: '2.3em',
    borderRadius: '5em',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    backgroundColor: `rgb(${purple})`,
    marginTop: "2em",
    paddingTop: "0.6em",
    fontSize: '1.2em',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: white,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});
