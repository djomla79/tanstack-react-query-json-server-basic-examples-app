const List = ({ data }) => {
  let header = '';
  let dependentData = [];
  let isDependent = false;

  if (data?.config?.url === '/users') {
    header = 'Users List';
  } else if (data?.config?.url === '/numbers') {
    header = 'Numbers List';
  } else {
    header = 'Dependent RQ List';
    isDependent = true;
    dependentData = data?.data?.fruits || [];
  }

  return (
    <>
      <div>{header}</div>
      {isDependent
        ? dependentData.map((el, index) => {
            return <div key={index}>{el}</div>;
          })
        : data?.data?.map(({ id, firstName }) => {
            return (
              <div key={id}>
                ID: {id} Name: {firstName}
              </div>
            );
          })}
    </>
  );
};

export default List;
