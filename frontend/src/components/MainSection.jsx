const MainSection = () => {
    return(
      <>
      {/* Section 2 */}
      <div className="h-screen">
        <div className="px-16 mb-10">
          <h2 className="w-[400px] text-[35px] font-semibold ">A list of our following services</h2>
          <hr /> 
        </div>
        <div className="flex flex-row items-center">
          <img src="src\assets\talk-therapy-img2.png" alt="" className="w-[500px] h-[363px]" />
          {/* Section 2-1 */}
          <div className="flex flex-col px-16">
            <div className="flex flex-col mb-10">
              <div className="flex flex-row gap-28">
                <h3 className="text-[28px] font-semibold">Talk with professional</h3>
                <div className="flex flex-col gap-4 items-center">
                  <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed debitis totam modi sit, ducimus repellat velit dolorem nesciunt adipisci.</p>
                  <button className="w-[150px] h-8 bg-[#118AB2] rounded-3xl hover:scale-110 transition-transform duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <hr />
            {/* Section 2-2 */}
            <div className="flex flex-col mb-10 mt-4">
              <div className="flex flex-row  justify-between">
                <h3 className="text-[28px] font-semibold">Lorem, ipsum dolor.</h3>
                <div className="flex flex-col gap-4 items-center">
                  <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed debitis totam modi sit, ducimus repellat velit dolorem nesciunt adipisci.</p>
                  <button className="w-[150px] h-8 bg-transparent btn-border rounded-3xl hover:scale-110 transition-transform duration-300">Learn More</button>
                </div>
              </div>
            </div>
            <hr />
            {/* Section 2-3 */}
            <div className="flex flex-col mb-10 mt-4">
              <div className="flex flex-row  justify-between">
                <h3 className="text-[28px] font-semibold">Lorem, ipsum dolor.</h3>
                <div className="flex flex-col gap-4 items-center">
                  <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed debitis totam modi sit, ducimus repellat velit dolorem nesciunt adipisci.</p>
                  <button className="w-[150px] h-8 bg-transparent btn-border rounded-3xl hover:scale-110 transition-transform duration-300">Learn More</button>
                </div>
              </div>
            </div>
            <hr />

          </div>
        </div>
      </div>
      {/* End of Section 2 */}      
      </>
    )
}

export default MainSection