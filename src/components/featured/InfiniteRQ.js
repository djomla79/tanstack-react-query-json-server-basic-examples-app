import { useGetInfiniteNumbers } from '../../hooks';

const InfiniteRQ = () => {
  const {
    isPending,
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetInfiniteNumbers();

  if (isPending || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        {data?.pages?.map(({ data }, index) => {
          return (
            <div key={index}>
              {data.map(({ id, label }) => (
                <div key={id}>
                  {id} {label}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <br />
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading...'
            : hasNextPage
            ? 'Load More'
            : 'No more items!'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  );
};

export default InfiniteRQ;
