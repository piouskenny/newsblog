// Components
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SideBar from './components/sidebar';
import CardSection from './components/cardsection';


function App() {
  return (
    <>
      <Navbar />
      <main className="md:mx-6 pt-20 md:pt-0">
        
        {/* Hero and side bar section */}
        <div className="grid md:grid-cols-3 md:mt-2">
         

        {/* Hero */}
        <Hero/>
        {/* SideBar */}
        <SideBar/>
        </div>
        {/* Card Section */}
 
        <CardSection/>
      </main>
    </>
  );
}

export default App;