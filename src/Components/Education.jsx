import EduDetails from "./details/EducationDetails"

const Education =()=>{
    return (
        <>
          <div className="main w-[100%]  flex flex-col gap-[30px]">
                 <div className="header flex items-center pl-[30px] md:gap-[75%]">
                    <h1 className="text-[20px] font-medium">Education</h1>
                            <img src="../../public/add.png" alt="" />
                </div>
              <div className="flex items-center bg-[#FFFFFF] rounded-[15px] border-[1px]  justify-between pl-[30px] pt-[23px] pr-[39px] pb-[23px]">
                  <h1 className="font-medium text-[20px] text-[#0000005b] ">Highest Education</h1>
                  <div  className="flex gap-[17px] cursor-pointer">
                      <h1 className="font-medium text-[20px]">Graduate</h1>
                      <img src="../../public/right.png" alt="" />
                  </div>
              </div>
              <div className=" pt-[65px] pb-[40px] pl-[30px] bg-[#FFFFFF] rounded-[15px]  border-[1px]">
                 <EduDetails/>
              </div>
          </div>
        </>
    )
}

export default Education