const Footer = ()=>{
    return (
        <>
          <footer className="h-auto min-h-[232px] w-full bg-[#FFFFFF] flex items-center pl-[100px] border-t-2">
          <div className="left flex gap-[44px]">
            <div className="flex flex-col items-center md:items-center justify-center  p-4 md:p-0 gap-2">
              <img
                src="../../public/logo.png"
                alt="Logo"
                
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3   mt-4 md:mt-0  text-center md:text-left gap-[160px]">
              <div className="flex flex-col text-[#00000084] gap-2 font-bold">
                <div className="flex flex-col gap-[2px]">
                  <a href="#">About</a>
                  <a href="#">Careers</a>
                  <a href="#">Employer home</a>
                  <a href="">Sitemap</a>
                  <a href="">Credits</a>
                </div>
              </div>
              <div className="flex flex-col text-[#00000084] gap-2 font-bold">
                <div className="flex flex-col gap-[2px]">
                  <a href="#">Help center</a>
                  <a href="#">Grievances</a>
                  <a href="#">Report issue</a>
                  <a href="">Summons/Notices</a>
                </div>
              </div>
              <div className="flex flex-col text-[#00000084] font-bold gap-2">
                <div className="flex flex-col gap-[2px]">
                  <a href="#">Privacy policy</a>
                  <a href="#">Terms & conditions</a>
                  <a href="">Froud alert</a>
                  <a href="">Trust and safety</a>
                </div>
              </div>
            </div>
          </div>
          <div className="right ml-[100px] flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0">
             <img src="../../public/facebook.png" alt=""className="cursor-pointer" />
             <img src="../../public/twitterX.png" alt=""className="cursor-pointer" />
             <img src="../../public/insta.png" alt="" className="cursor-pointer"/>
             <img src="../../public/linkedin.png" alt=""className="cursor-pointer mb-[5px] mr-[14px]" />
          </div>
       
      </footer>
        </>
    )
}

export default Footer