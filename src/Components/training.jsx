import Certificates from "./certificates"

const Training = ()=>{
    return (
        <>
         <div className=" main  w-[100%] bg-[#FFFFFF] flex flex-col  pt-[20px] gap-[15px] rounded-[15px] border-[1px]">
                <div className="header flex items-center pl-[30px] md:gap-[48%]">
                    <h1 className="text-[20px] font-medium">Trainings & Certificates</h1>
                    <div className="icons flex gap-[18.85px] ">
                            <img src="../../public/edit.png" alt="" />
                            <img src="../../public/add.png" alt="" />
                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center pl-[61px] mb-[25px]">
                    <Certificates/>
                    <Certificates/>
                </div>

                  <button className="w-full border-t h-[59px] flex justify-center items-center gap-[20px]">
                    <h1 className="text-[17px] font-medium">Show all </h1>
                   <img src="../../public/down.png" alt="" />
                  </button>
         </div>
        </>
    )
}

export default Training