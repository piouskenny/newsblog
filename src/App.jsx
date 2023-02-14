import Navbar from "./components/navbar";
import Deskhero from "./assets/img/image-web-3-desktop.jpg";
import MobileHero from './assets/img/image-web-3-mobile.jpg';
import PC from './assets/img/image-retro-pcs.jpg';
import gaming from './assets/img/image-gaming-growth.jpg';
import laptop from './assets/img/image-top-laptops.jpg';

function App() {
  return (
    <>
      <Navbar />

      <main className="md:mx-6 pt-4">
        <div className="grid md:grid-cols-3">
          {/* Hero and side bar section */}
          <div className="md:col-span-2 md:ml-6 mx-6 md:pr-6 pt-12 md:pt-0">
            {/* Hero */}


            <div className="h-80 w-full" id="hero">

            </div>

            <div className="grid md:grid-cols-2 mt-6">
              <div className="md:col-span-1">
                <h1 className="font-bold text-start md:text-6xl text-5xl slogan font-[Inter] ">
                  The Bright Future of web 3.0?
                </h1>
              </div>

              <div className="md:col-span-1 text-start mt-5 md:mt-0 px-2 md:px-0">
                <p className="text-gray-500 ">
                  We dive into the next evolution of the web that claims to put the power of the platform back to the hands of the people. But is it really fulfilling its promise?
                </p>

                <button className="bg-red-500 px-12 py-2 uppercase md:px-12 mt-6 md:py-4 font-bold rounded-sm hover:bg-gray-900 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-gray-900  md:pt-4 px-4 mx-6 mt-12 md:mt-0 md:mx-0">
            {/* SideBar */}
            <h1 className="text-orange-400 text-3xl font-bold text-start my-4 ">
              New
            </h1>
            <div className="sidebar-item text-start my-6">
              <h4 className="text-white font-bold text-xl hover:text-orange-400 cursor-pointer">
                Hydrogen VS Electric Cars
              </h4>
              <p className="mt-2 text-gray-400 text-lg">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <hr className="text-gray-500" />
            <div className="sidebar-item text-start my-6">
              <h4 className="text-white font-bold text-xl hover:text-orange-400 cursor-pointer">
                The Downside of AI artistry
              </h4>
              <p className="mt-2 text-gray-400 text-lg">
                What are the possible adverse effect of on-demand AI image
                generation?
              </p>
            </div>
            <hr />
            <div className="sidebar-item text-start my-6">
              <h4 className="text-white font-bold text-xl hover:text-orange-400 cursor-pointer">
                Is VC Funding Drying Up?
              </h4>
              <p className="mt-2 text-gray-400 text-lg">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 mt-8 mx-6 md:mx-6 mb-5">
          <div className="col-span-1 mt-8 md:mt-0">
            <div className="flex">
              <div className="">
                <img src={PC} alt=""  className="md:h-full md:w-28 w-24 "/>
              </div>
              <div className="text-start mx-2 md:p-1 pb-0 ml-6 mr-6">
                <h1 className="md:text-4xl text-2xl text-gray-400 font-bold">01</h1>
                <h2 className="font-bold text-dark my-1">Reviving Retro PCs</h2>
                <p className="text-gray-400 text-md">what happens when old PCs are given morden updates?</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
          <div className="flex">
              <div className="">
                <img src={laptop} alt=""  className="md:h-full md:w-28 w-24 "/>
              </div>
              <div className="text-start mx-2 md:p-1  pb-0 ml-6 mr-6">
                <h1 className="md:text-4xl text-2xl text-gray-400 font-bold">02</h1>
                <h2 className="font-bold text-dark my-1">Top 10 Laptops of 2022</h2>
                <p className="text-gray-400 text-md">Our best picks for favourite needs and budgets</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
          <div className="flex">
              <div className="">
                <img src={gaming} alt=""  className="md:h-full md:w-28 w-24 "/>
              </div>
              <div className="text-start mx-2 md:p-1  pb-0 ml-6 mr-6">
                <h1 className="md:text-4xl text-2xl text-gray-400 font-bold">03</h1>
                <h2 className="font-bold text-dark my-1">The Growth of Gaming</h2>
                <p className="text-gray-400 text-md">How the pandemic has sparked various opportnities</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;