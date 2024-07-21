import Name from './Name/Name';
import LogoBar from './Logos/LogoBar';
import SectionContainer from './Sections/SectionContainer';


function App() {
  return (
    <div className="App text-white bg-slate-950 flex md:flex-row justify-stretch md:p-0 pt-24 md:justify-center items-center min-h-screen md:gap-48
    flex-col 
    ">
      <div className="flex flex-col md:w-auto">
        <div className='my-4 md:my-12'><Name/></div>
        <div className='mb-4 mt-8 md:my-12'><LogoBar/></div>
      </div>
      <div>
        <div className='m-12 md:w-auto'><SectionContainer /></div>
      </div>
    </div>
  );
}

export default App;
