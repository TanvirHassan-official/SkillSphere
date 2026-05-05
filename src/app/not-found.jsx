/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import 'animate.css';



const NotFound = () => {
    return (
        <div className="grid justify-items-center gap-10 m-10">

            <img
              className="max-h-96 w-auto drop-shadow-2xl rounded-2xl animate__animated animate__tada"
              src={"/assets/error-404.png"}
              alt="Clicking for the best tools"
            />
            <Link href="/">
                <button className={'btn bg-[#386FA4] text-white hover:bg-white hover:text-black px-10 '}>
                Back to Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;