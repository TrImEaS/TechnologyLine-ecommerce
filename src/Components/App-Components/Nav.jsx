import { NavLink } from 'react-router-dom'
import { FaArrowCircleRight, FaArrowCircleDown } from 'react-icons/fa' 
import UserIcons from './Nav-Components/UserIcons.jsx'
import CategoriesMenu from './Nav-Components/CategoriesMenu.jsx'
import SearchInput from './Nav-Components/SearchInput.jsx'

export default function Nav() {
  return (
    <nav 
      className='z-50 flex flex-col w-full relative items-center bg-blue-400'>
    {/*---Nav top---*/}
      <section className='flex gap-x-10 max-sm:gap-x-2 justify-between items-center h-28 w-3/4 max-lg:w-full px-2'>
        {/*Logo*/}
        <NavLink to='/' className='h-[100px] flex items-center max-xl:justify-center'>
          <img src="/logo-tline.svg" alt="company-logo" className='w-[200px] max-w-[200px] pb-3'/>
        </NavLink>

        {/*Search input*/}
        <div className='max-md:hidden flex w-[50%]'>
          <SearchInput/> 
        </div>
        {/*User items o Link to realcolor shop*/}
        <article className='flex gap-x-6 max-sm:gap-x-3 justify-end max-xl:justify-center w-fit'>
          {/* <UserIcons/> */}
          <a href="https://www.technology-line.com.ar/" className='w-full hover:scale-110 hover:border-white flex border-b-4 border-transparent items-center gap-x-1 gap-y-2 duration-300 flex-col'>
            <div className='flex justify-around px-3 w-full text-white max-sm:text-lg text-xl animate-bounce'>
              <FaArrowCircleDown className='-rotate-45 '/>
              <FaArrowCircleDown/>
              <FaArrowCircleDown className='rotate-45'/>
            </div>

            <p className='text-white font-bold text-xl max-sm:text-base w-[104%]'>
              Ir a Real Color Shop
            </p>
          </a>
        </article>
      </section>

      {/*---Nav bottom Full Screen---*/}
      <section className='hidden md:flex z-50 w-full items-center justify-around gap-x-5 bg-page-blue-normal text-slate-50 text-[15px]'>
        <article className='w-3/4 max-lg:w-full px-10 flex h-[60px] items-center justify-around min-w-[640px]'>
          <CategoriesMenu/>
        </article>
      </section>

      {/*---Nav bottom  MD screen---*/}
      <section className='md:hidden flex h-[60px] w-full items-center justify-center gap-x-5 bg-page-blue-normal text-slate-50 max-md:justify-start max-md:px-20 max-sm:px-10'>
        {/* Categorias */}
        <CategoriesMenu/>        
        
        <article className='rounded-full w-[60%] max-md:w-full'> <SearchInput/> </article>
      </section>
    </nav>
  )
}
