import { Button } from "@material-tailwind/react";

const Main = () => {
    return (
        <main className="flex items-center justify-center p-5 flex-col gap-32 lg:justify-around">
             <div className="">
                <h1 className="font-bold text-3xl text-orange-500">The first explorer on the world!</h1>
                <p className="font-medium ">We are the first created explorer, and we are the best actually.</p>
                <Button variant="outlined" className=''>Login</Button>
             </div>

        </main>
      );
};

export default Main;