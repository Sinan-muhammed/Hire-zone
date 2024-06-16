import Profile from "../Components/Profile"
import Contact from "../Components/contact"

const Left = ()=>{
    return (
        <>
         <div className="left w-[30%] flex flex-col  items-center">
            <div className="profile">
                <Profile/>
            </div>
            <div className="contact">
                <Contact/>
            </div>
         </div>
        </>
    )
}

export default Left 