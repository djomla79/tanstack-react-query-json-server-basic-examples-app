import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/users'>Users Without RQ</Link>
      </div>
      <div>
        <Link to='/users-rq'>Users With RQ</Link>
      </div>
      <div>
        <Link to='/parallel-rq'>Parallel RQ</Link>
      </div>
      <div>
        <Link to='/dynamic-parallel-rq'>Dynamic Parallel RQ</Link>
      </div>
      <div>
        <Link to='/paginated-rq'>Paginated RQ</Link>
      </div>
      <div>
        <Link to='/infinite-rq'>Infinite RQ</Link>
      </div>
      <div>
        <Link to='/dependent-rq'>Dependent RQ</Link>
      </div>
    </nav>
  );
};

export default NavBar;
