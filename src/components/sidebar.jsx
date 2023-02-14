const SideBar = () => {
    return (
        <div className="col-span-1 bg-gray-900  md:pt-4 px-4 mx-6 mt-12 md:mt-0 md:mx-0">
            
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
    )
}

export default SideBar 