import Link from "next/link";
import Image from "next/image";
import 'animate.css';

const NotFound = () => {
    return (
        <div className="grid justify-items-center gap-10 m-10">
            <Image
                className="max-h-96 w-auto drop-shadow-2xl rounded-2xl animate__animated animate__tada"
                src="/assets/error-404.png"
                alt="404 not found"
                width={500}
                height={400}
            />
            <Link href="/">
                <button className="btn bg-[#386FA4] text-white hover:bg-white hover:text-black px-10">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
