import Logo  from '../assets/firefox-color-svgrepo-com.svg'
import { Button } from "@material-tailwind/react";


const Navbar = () => {
    return (
        <header>
        <nav className='flex p-4 items-center shadow-lg justify-between '>
            <div className="logo w-9">
                <img src={Logo} alt="" />
            </div>

            <ul className='flex gap-5  justify-center'>
                <li><a href="" className='text-orange-500 hover:text-orange-700 '>Home</a></li>
                <li><a href="" className='text-orange-500 hover:text-orange-700 '>Contact</a></li>
                <li><a href="" className='text-orange-500 hover:text-orange-700 text-sm'>Help us</a></li>
            </ul>
            
            <Button variant="outlined" className='text-orange-500 border-orange-500 hover:shadow-md '>Login</Button>
        </nav>
    </header>
    );
};

export default Navbar;