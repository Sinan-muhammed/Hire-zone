
import Education from "../Components/Education"
import Experience from "../Components/Experience"
import Resume from "../Components/Resume"
import Skills from "../Components/Skils"
import Training from "../Components/training"

const Right = ()=>{
    return (
        <> 
          <div className="mt-[80px] flex flex-col gap-[31px]">
                <div className="resume">
                     <Resume/>
                </div>
                <div className="div-two flex gap-[31px]">
                    <Experience/>
                    <Skills/>
                </div>
                <div className="education">
                    <Training/>
                </div>
                <div>
                    <Education/>
                </div>
          </div>
        </>
    )
}

export default Right