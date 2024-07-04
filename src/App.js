import Name from './Name/Name';
import LogoBar from './Logos/LogoBar';
import SectionContainer from './Sections/SectionContainer';


function App() {
  return (
    <div className="App text-white bg-slate-950 flex flex-row justify-center items-center min-h-screen gap-48">
      <div className="flex flex-col w-full md:w-auto">
        <div className='my-12'><Name/></div>
        <div className='my-12'><LogoBar  /></div>
      </div>
      <div>
        <div className='m-12 md:w-auto'><SectionContainer /></div>
      </div>
    </div>
  );
}

export default App;
