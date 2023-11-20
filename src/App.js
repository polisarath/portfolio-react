import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [NavDrawerOpen, setNavDrawerOpen] = useState(false);

  return (
   <>
<div className={`fixed left-0 top-0 z-50 w-full h-full bg-white ${NavDrawerOpen? '':'translate-x-full'} transition-all duration-300 ease-in-out`}>
   <button className=' fixed top-4 right-4' onClick={()=>{setNavDrawerOpen(false)}}>
    <img className='w-6 h-6' src='../img/close.png' alt="logo"/>
     </button>
     <nav className=' h-full w-full flex flex-col items-center justify-center'>
      <ul className='flex flex-col gap-8 items-center '>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
     </div>
  
   <header className=' flex flex-row justify-center items-center h-20 p-4 shadow-2xl'>
   <div className=' container flex flex-row justify-between items-center text-xl text-slate-900' >
    <span  className=' text-xl font-bold antialiased '>Sarath lal shaji</span>
    <nav className='hidden lg:block'>
      <ul className='flex flex-row gap-6 '>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>

      </ul>
    </nav>
  <button className='lg:hidden'  onClick={()=>{setNavDrawerOpen(true)}}>
  <img className='w-6 h-6' src="./img/menu.png" alt='menu' />
</button>

   
    </div>
    </header>
    <main className='py-10'>
      <section className='grid gap-6 px-8 items-center md:grid-cols-2 container mx-auto '>
      <img className='md:row-start-1 md:col-start-2  w-full object-center object-cover aspect-square ' src='./img/sarath2.jpg' alt='profile'/>
      <div className='md:row-start-1 flex flex-col items-center max-w-lg'>
      <span className='text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-medium mb-5'>Sarath Lal Shaji</span>
      <h1>Mastering the Art of Web Development</h1>
      <h1 className='text-xl lg:text-2xl xl:text-2xl text-center text-mono italic '>I am a full stack developer, I have experience in building web applications using react and nodejs.</h1>
     
      <section className='px-4 py-10 flex flex-row justify-start '>
        <ul className='grid grid-cols-2 gap-8 md:grid-cols-4 w-full max-w-lg  '>
          <li  className='flex flex-col justify-center items-center border border-black-800 aspect-square'>
            <img className='w-20 opacity-90' src="./img/mongo.png" alt='mongo'/>
            <h3 className='font-semibold mt-2'>MongoDB</h3>
          
          </li>
          <li className='flex flex-col justify-center items-center border border-black-800 aspect-square'>
            <img className='w-20 opacity-90' src="./img/react.png" alt='mongo'/>
            <h3 className='font-semibold mt-2'>React JS</h3>
          </li>
          <li className='flex flex-col justify-center items-center border border-black-800 aspect-square'>
            <img className='w-20 opacity-90' src="./img/express.png" alt='mongo'/>
            <h3 className='font-semibold mt-2'>Express JS</h3>
          
          </li>
          <li className='flex flex-col justify-center items-center border border-black-800 aspect-square'>
            <img className='w-20 opacity-90' src="./img/node.png" alt='mongo'/>
            <h3 className='font-semibold mt-2'>Node Js</h3>
        
          </li>
        </ul>
      </section>     
      </div>
      </section>
    </main>
    </>
  );
}
export default App;
