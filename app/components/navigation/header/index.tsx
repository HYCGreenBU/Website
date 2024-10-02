import React from "react";
import Link from "next/link";
import logo from "../../../../public/media/Images/logoCropped.svg"
import Image from "next/image";


const Header = () => {
    return(
        <div className="h-30 py-4 ">
            <div className="flex justify-start px-4 ">
                <Link href="/">
                    <Image
                        src = {logo}
                        alt = "Test"
                        className="h-8 w-auto"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Header;