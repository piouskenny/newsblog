// Assets
import PC from '../assets/img/image-retro-pcs.jpg';
import gaming from '../assets/img/image-gaming-growth.jpg';
import laptop from '../assets/img/image-top-laptops.jpg';


const CardSection = () => {
    return (
        
        <div className="grid md:grid-cols-3 mt-8 mx-6 md:mx-6 mb-5">
          <div className="col-span-1 mt-8 md:mt-0">
            <div className="flex">
              <div className="">
                <img src={PC} alt=""  className="md:h-full md:w-28 w-24 "/>
              </div>
              <div className="text-start mx-2 md:p-1 pb-0 ml-6 mr-6">
                <h1 className="md:text-4xl text-2xl text-gray-400 font-bold">01</h1>
                <h2 className="font-bold text-dark my-1 hover:text-red-500 cursor-pointer">Reviving Retro PCs</h2>
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
                <h2 className="font-bold text-dark my-1 hover:text-red-500 cursor-pointer">Top 10 Laptops of 2022</h2>
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
                <h2 className="font-bold text-dark my-1 hover:text-red-500 cursor-pointer">The Growth of Gaming</h2>
                <p className="text-gray-400 text-md">How the pandemic has sparked various opportnities</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardSection