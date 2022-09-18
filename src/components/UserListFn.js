import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/features/users/userSlice";

const UserListFn = () => {
  const allUsers = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  const doFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="wrapper">
      <h1>[REDUX | Function Component] - Fetch Async Thunk</h1>
      <h1>All Users</h1>
      <button onClick={doFetchUsers}>Get Users</button>
      {/* <pre>{JSON.stringify(allUsers, null, 2)}</pre> */}
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th style={{ padding: "4px 1em", textAlign: "justify" }}>Nama</th>
            <th style={{ padding: "4px 1em", textAlign: "justify" }}>
              Username
            </th>
            <th style={{ padding: "4px 1em", textAlign: "justify" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "4px 1em", textAlign: "justify" }}>
                {user.name}
              </td>
              <td style={{ padding: "4px 1em", textAlign: "justify" }}>
                {user.username}
              </td>
              <td style={{ padding: "4px 1em", textAlign: "justify" }}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListFn;
