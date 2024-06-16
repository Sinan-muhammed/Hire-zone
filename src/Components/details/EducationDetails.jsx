const EduDetails =()=>{
    return (
        <>
          <div className="details flex flex-col relative border-l-[2px] border-[#000000] border-dashed gap-[30px] pl-[66px]   ml-[58px]  pb-[15px]" >
                <div className=" absolute  top-[-20px] bg-white left-[-28.5px]">
                    <img src="../../../public/graduate.png" alt="" />
                </div>
                <div className="heder flex  flex-col gap-[12px]">
                    <div className="flex justify-between items-center">
                    <h1 className="text-[20px] font-medium">BCA</h1>
                    <img src="../../public/edit.png" alt="" className="mr-[25px] mt-[-40px] cursor-pointer"/>
                    </div>
                    <h1 className="text-[17px] font-medium text-[#676767]">Calicut University - University of Calicut, Malappuram</h1>
                </div>
                <div className="flex gap-[20px]">
                <button className="w-[185px] h-[30px] rounded-[15px] border-[2px] text-[13px] font-normal text-[#00000075]">Jun 2020 - Mar 2023</button>
                <button className="w-[103px] h-[30px] rounded-[15px] border-[2px] text-[13px] font-normal text-[#00000075]">Full Time</button>
                </div>
            </div>
            
        </>
    )
}

export default EduDetails