import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// const contextClass = {
//   success: 'bg-blue-600',
//   error: 'bg-red-600',
//   info: 'bg-gray-600',
//   warning: 'bg-orange-400',
//   default: 'bg-indigo-600',
//   dark: 'bg-white-600 font-gray-300',
// }

const MainLayout = () => {
  return (
    <>
      <ToastContainer
      // toastClassName={context =>
      //   contextClass[context?.type || 'default'] +
      //   ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
      // }
      // bodyClassName={() => 'text-sm font-white font-med block p-3'}
      // position="bottom-left"
      // autoClose={3000}
      />
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout

{
  /* <h1 className="text-purple-900 bg-yellow-700 p-5 text-3xl text-center">
  Continue from 2 hours and 03 minutes mark
</h1> */
}
{
  /* <p className="text-center">
  <Link target="_blank" to="https://www.youtube.com/watch?v=LDB4uaJ87e0">
    Crash Course
  </Link>
</p> */
}
