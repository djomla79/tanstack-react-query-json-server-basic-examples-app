import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../hooks/useCustomQueries';

const UserWithRQ = () => {
  const { userId } = useParams();
  const { isPending, isError, data, error } = useGetUserById(userId);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      Name: {data?.data?.firstName} {data?.data?.lastName}
    </div>
  );
};

export default UserWithRQ;
