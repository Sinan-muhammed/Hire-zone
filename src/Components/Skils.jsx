import SkillText from "./skiltext"

const Skills = ()=>{
    return (
        <>
         <div className="main max-w-[330px] flex flex-col gap-[43px] h-max pb-[29px] pt-[32px] bg-[#FFFFFF] rounded-[15px] border-[1px] ">
         <div className="head flex gap-[68px] ml-[30px]">
                <h1 className="text-[20px] font-medium">Key Skills</h1>
                <div className="icons flex gap-[18.85px]">
                    <img src="../../public/edit.png" alt="" className="cursor-pointer" />
                    <img src="../../public/add.png" alt=""  className="cursor-pointer"/>
                </div>
            </div>
                <div className="skills w-[100%] flex gap-[24px] flex-wrap items-center ml-[9%]">
                     <SkillText/>
                     <SkillText/>
                     <SkillText/>                   
                     <SkillText/>                   
                     <SkillText/>                   
                   
                </div>
         </div>
        </>
    )
}

export default Skills