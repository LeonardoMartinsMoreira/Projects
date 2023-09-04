
import { Button } from "flowbite-react";
import Logo from "./assets/Logo (1).svg";

function  Header() {
  return (
    <header className="@container">
      <nav className=" h-48 flex flex-col justify-around gap-5 items-center bg-green-700 @lg:flex-row @lg:h-24">
        <img src={Logo} alt="" className="h-6" />

        <ul className="flex gap-5 ">
          <li>
            <a href="#" className="font-semibold text-lg text-white hover:text-green-300 ease-in-out duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-lg text-white hover:text-green-300 ease-in-out duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-lg text-white hover:text-green-300 ease-in-out duration-300">
              Help us
            </a>
          </li>
        </ul>

        <Button color="gray" pill className='rounded-lg w-28 ease-in-out duration-300'>
          <p>Light</p>
        </Button>
      </nav>
      </header>
  );
}


function App() {
  return (
    <>
     <Header />
    </>
  );
}

export default App;
