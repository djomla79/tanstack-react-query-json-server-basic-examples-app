import { useGetUserById, useGetProductsByProductId } from '../../hooks';
import List from '../common/List';

const DependentRQ = () => {
  const userId = 'qpq744q';
  const { data: user } = useGetUserById(userId);
  const productId = user?.data?.productId;
  const { data: products } = useGetProductsByProductId(productId);

  return (
    <>
      <List data={products} />
    </>
  );
};

export default DependentRQ;
