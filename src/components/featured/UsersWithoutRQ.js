import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, USERS_PATH } from '../../constants';

const UsersWithoutRQ = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const { data } = await axios.get(`${BASE_URL}/${USERS_PATH}`);

      if (data.error) {
        setError(data.error.message);
        setIsLoading(false);
      }

      setUsers(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>Users Without RQ</div>
      {users.map(({ email, firstName, lastName }) => {
        return (
          <div key={email}>
            Name: {firstName} {lastName} Email: {email}
          </div>
        );
      })}
    </>
  );
};

export default UsersWithoutRQ;
