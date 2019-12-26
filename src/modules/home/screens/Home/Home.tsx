import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from 'types/state';

interface Props {
  dispatch: Dispatch;
  users: Array<any>;
}

export const HomeScreen: React.FunctionComponent<Props> = ({
  users,
}: Props) => {
  return (
    <div>
      {users}
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  users: state.home.users,
});

export default connect(mapStateToProps)(HomeScreen);
