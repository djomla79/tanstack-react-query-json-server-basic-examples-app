import { useGetUsers, useGetNumbers } from '../../hooks';
import List from '../common/List';

const ParallelRQ = () => {
  const { data: users } = useGetUsers();
  const { data: numbers } = useGetNumbers();

  return (
    <>
      <div>Parallel RQ</div>
      <List data={users} />
      <List data={numbers} />
    </>
  );
};

export default ParallelRQ;
