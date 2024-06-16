const Navbar = ()=>{
    return (
        <>

           <div className="nav container mx-auto h-[110px] bg-white flex items-center pt-[25px]">
    <div className="left flex justify-center items-center ml-4 ">
        <img src="../../public/Logo.png" alt="logo" className="h-[60px] w-[160px] sm:h-[86px] sm:w-[236px]"/>
    </div>
    <div className="center hidden sm:flex justify-center items-center gap-4 sm:gap-[45px] ml-auto sm:ml-[17%]">
        <h1 className="font-semibold hover:font-bold cursor-pointer">Home</h1>
        <h1 className="font-semibold hover:font-bold cursor-pointer">Jobs</h1>
        <h1 className="font-semibold hover:font-bold cursor-pointer">Companies</h1>
    </div>
    <div className="right flex items-center justify-center ml-auto sm:ml-[24%] gap-4 sm:gap-[150px]">
        <div className="one flex items-center justify-center gap-4 sm:gap-14">
            <img src="../../public/message.png" alt="messages" className="cursor-pointer h-6 w-6 sm:h-auto sm:w-auto"/>
            <img src="../../public/bell.png" alt="notifications" className="cursor-pointer h-6 w-6 sm:h-auto sm:w-auto"/>
        </div>
        <div className="two">
            <img src="../../public/person.png" alt="profile" className="h-6 w-6 sm:h-auto sm:w-auto cursor-pointer"/>
        </div>
    </div>
</div>
  <hr className="w-[90%] h-[2px] bg-black ml-[5%]"/>
        
        </>
    )
}

export default Navbar