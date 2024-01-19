import { useGetDynamicParallelQueries } from '../../hooks';

const DynamicParallelRQ = () => {
  const userIds = ['dsgdasw', 'qpq744q'];
  const queries = useGetDynamicParallelQueries(userIds);

  return (
    <>
      <div>Dynamic Parallel RQ</div>
      <div>
        {(queries || []).map(({ data }, index) => {
          return (
            <div key={index}>
              <span>Query number: {`${index + 1}`}</span> Name:{' '}
              {data?.data?.firstName} {data?.data?.lastName}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DynamicParallelRQ;
