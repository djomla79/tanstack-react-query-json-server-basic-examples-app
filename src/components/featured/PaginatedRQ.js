import { useState } from 'react';
import { useGetNumbersByPage } from '../../hooks';

const PaginatedRQ = () => {
  const [page, setPage] = useState(0);
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useGetNumbersByPage(page);

  console.log('data: ', data);
  console.log('isPlaceholderData: ', isPlaceholderData);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        {data?.data.map(({ id, label }) => {
          return (
            <div key={id}>
              <div>
                {id} {label}
              </div>
            </div>
          );
        })}
      </div>
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPlaceholderData) {
            setPage((prev) => prev + 1);
          }
        }}
        disabled={isPlaceholderData}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </>
  );
};

export default PaginatedRQ;
