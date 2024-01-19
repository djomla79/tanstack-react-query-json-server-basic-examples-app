import { Link } from 'react-router-dom';
import useInput, { useAddUser, useGetUsers } from '../../hooks';

const UsersWithRQ = () => {
  const { firstName, lastName, email, onChangeHandler } = useInput();
  const {
    isPending,
    data,
    isError,
    error,
    // refetch
  } = useGetUsers();
  const { mutate: addUser } = useAddUser();

  const addUserHandler = () => {
    addUser({ firstName, lastName, email, productId: 'p1' });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>Users With RQ</div>
      <div>
        <input
          name='firstName'
          type='text'
          value={firstName}
          placeholder='First Name'
          onChange={onChangeHandler}
        />
        <br />
        <input
          name='lastName'
          type='text'
          value={lastName}
          placeholder='Last Name'
          onChange={onChangeHandler}
        />
        <br />
        <input
          name='email'
          type='text'
          value={email}
          placeholder='Email'
          onChange={onChangeHandler}
        />
        <br />
        <button onClick={addUserHandler}>Add User</button>
        <br />
      </div>
      {/* Example with refetch function
      <button onClick={refetch}>Re-Fetch Users</button> */}
      <div>Users List</div>
      {data?.data.map(({ id, firstName, lastName, email }) => {
        return (
          <div key={id}>
            <Link to={`/users-rq/${id}`}>
              Name: {firstName} {lastName} Email: {email}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default UsersWithRQ;
