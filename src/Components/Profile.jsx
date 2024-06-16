const Profile = ()=>{
    return (
        <div className="profile flex flex-col items-center gap-[18px]">
               <div className="profile h-[153px] w-[153px] bg-black border-[4px]  border-green-500 rounded-full object-cover">
                            <img src="../../public/profile.png" alt="" />
               </div>
               <div className="name  flex flex-col justify-center items-center">
                 <h1 className="text-[25px] font-medium ">SINAN MUHAMMED</h1>
                <h1 className="text-[18px] font-medium text-[#4E53D1]">Front End Developer</h1>
               </div>
               <button className="w-[124px] h-[29px] bg-[#EDEDED] border-[2px] rounded-[15px] text-[13px] font-medium text-[#4E53D1]">Edit Profile</button>
        </div>
    )
}

export default Profile