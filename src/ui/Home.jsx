import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import { Link } from 'react-router-dom';
function Home() {
  const userName = useSelector(state=>state.user.userName)
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName ? <Link to='/menu'>
        <button className='rounded-full bg-yellow-400 w-8 h-8 '><div className='text-lg flex items-center justify-center -mt-1'>&rarr;</div></button>
      </Link> : <CreateUser />}
    </div>
  );
}

export default Home;
