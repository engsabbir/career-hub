import { BsFillPhoneFill } from 'react-icons/bs';
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto min-h-[50vh] p-5">
            <div className='p-5 md:p-10 shadow-lg rounded-lg'>
                <h2 className='text-2xl font-bold'>Location:</h2>
                <h3>Career Hub Center <br />Level 1, House 2A, Road 18/A, <br />Gulshan 1,Dhaka-1212, Bangladesh.</h3>
                <div className='flex flex-col md:flex-row  md:gap-5'>
                    <p className='flex gap-1 items-center mt-5'><BsFillPhoneFill></BsFillPhoneFill>+880 1568-998196</p>
                    <p className='flex gap-1 items-center mt-5'><HiOutlineMail></HiOutlineMail>engsabbir.dev@gmail.com</p>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;