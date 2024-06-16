const Resume = ()=>{
    return (
        <>
         <div className="main h-[260px] max-w-[692px] bg-[#FFFFFF] flex flex-col pr-[30px] pt-[20px] gap-[15px] rounded-[15px] border-[1px]">
                 <h1 className="font-Inter font-bold text-[20px] ml-[25px]">Resume</h1>
                 <div className="flex w-[100%] justify-between ">
                    <div className="left ml-[30px]">
                        <h1>resume4.pdf</h1>
                        <h1>Uploaded at May 18,2024</h1>
                    </div>
                    <div className="right flex w-[60px] h-[45px]  mr-[73px] gap-[15px]">
                        <img src="../../public/dwnload.png" alt="" className="cursor-pointer " />
                        <img src="../../public/delete.png" alt="" className="cursor-pointer"/>
                    </div>
                 </div>
                 <div className="pdf w-[632px] h-[97px] bg-[#FFFFFF] ml-[30px]  flex justify-center items-center border-[1px] rounded-[20px] border-black border-dashed">
                            <button className="w-[194px] h-[38px] bg-[#4E53D1] rounded-[20px] font-Inter text-white font-medium">Update Resume</button>
                 </div>
         </div>
        </>
    )
}

export default Resume