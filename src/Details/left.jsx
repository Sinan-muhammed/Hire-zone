import Jobs from "../Components/JobTitle"
import Language from "../Components/Language"
import Profile from "../Components/Profile"
import Contact from "../Components/contact"

const Left = ()=>{

    return (
        <>
         <div className="left w-[30%] mt-[80px] flex flex-col  items-center gap-[60px]">
            <div className="profile">
                <Profile/>
            </div>
            <div className="contact">
                <Contact/>
            </div>
            <div className="jobs">
                <Jobs/>
            </div>
            <div className="language">
                <Language/>
            </div>
         </div>
        </>
    )
}

export default Left 