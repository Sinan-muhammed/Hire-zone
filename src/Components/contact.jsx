const Contact = ()=>{
    return (
        <div className="contact flex   justify-center gap-[18px]">
                <div className=" flex flex-col items-center justify-center gap-[15px]">
                    <img src="../../public/mail.png" alt="" />
                    <img src="../../public/phone.png" alt="" />
                    <img src="../../public/location.png" alt="" />
                </div>
                <div className=" flex flex-col gap-[27px] justify-center ">
                <h1 className="text-[17px] font-medium">Abc@gmail.com</h1>
                    <h1 className="text-[17px] font-medium">+91 1234567890</h1>
                    <h1 className="text-[17px] font-medium">Calicut,Kerala</h1>
                   
                </div>
                
        </div>
    )
}

export default Contact