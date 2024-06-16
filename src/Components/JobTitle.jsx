
const Jobs = ()=>{
    return (
        <div className="jobs flex flex-col gap-[23px] rounded-[15px] border-[2px] bg-[#FFFFFF] pt-[17px] pl-[30px] pr-[48px] pb-[20px]">
            <div className="head flex items-center  gap-[23px]">
              <h1 className="text-[21px] font-bold">Job titles</h1>
              <a href="" className="text-[17px] font-semibold text-[#4E53D1]">Edit</a>
            </div>
              <div className="pl-[15px] flex flex-col gap-[5px]">
                <div className="flex items-center">
                    <li className="text-[18px] font-medium "></li>
                    <h1 className="text-[#7B7B7B] text-[18px] font-medium">UI / UX  Developer</h1> 
                </div>
                <div className="flex items-center">
                    <li className="text-[18px] font-medium "></li>
                    <h1 className="text-[#7B7B7B] text-[18px] font-medium">Front End  Developer </h1>
                </div>
                <div className="flex items-center"> 
                    <li className="text-[18px] font-medium "></li>
                    <h1 className="text-[#7B7B7B] text-[18px] font-medium">MERN Stack Developer</h1>
                </div>
              </div>
        </div>
    )
}

export default Jobs 