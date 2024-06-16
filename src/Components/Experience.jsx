import Content from "./details/content"

const Experience = ()=>{
 

    return (
        <> 
         <div className="main w-[50%] pt-[32px] pb-[48px] bg-[#FFFFFF] rounded-[15px] border-[1px] flex flex-col gap-[64px]">
            <div className="head flex gap-[77px] ml-[30px]">
                <h1 className="text-[20px] font-medium">Experience</h1>
                <div className="icons flex gap-[18.85px]">
                    <img src="../../public/edit.png" alt="" className="cursor-pointer" />
                    <img src="../../public/add.png" alt=""  className="cursor-pointer"/>
                </div>
            </div>
            <div className="content flex flex-col ">
              <Content/>
              <Content/>
              <Content/>
            </div>
         </div>
        </>
    )
}

export default Experience