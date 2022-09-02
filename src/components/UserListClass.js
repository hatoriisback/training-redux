import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/features/users/userSlice";

class UserListClass extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="userListClass-wrapper">
        <h1>[REDUX | Class Component] - Fetch Async Thunk</h1>
        <hr />
        {/* <pre>{JSON.stringify(this.props.localState, null, 2)}</pre> */}
        <table style={{margin: '0 auto'}}>
          <thead>
            <tr>
              <th style={{padding: '4px 1em', textAlign:'justify'}}>ID</th>
              <th style={{padding: '4px 1em', textAlign:'justify'}}>NAMA</th>
              <th style={{padding: '4px 1em', textAlign:'justify'}}>USERNAME</th>
              <th style={{padding: '4px 1em', textAlign:'justify'}}>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usersList.map((user) => {
              return (
                <tr key={user.id}>
                  <td style={{padding: '4px 1em', textAlign:'justify'}}>{user.id}</td>
                  <td style={{padding: '4px 1em', textAlign:'justify'}}>{user.name}</td>
                  <td style={{padding: '4px 1em', textAlign:'justify'}}>{user.username}</td>
                  <td style={{padding: '4px 1em', textAlign:'justify'}}>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersList: state.users.list,
});

export default connect(mapStateToProps)(UserListClass);
