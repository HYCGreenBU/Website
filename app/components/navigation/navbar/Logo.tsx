import React from "react";
import Link from "next/link";

const Logo = () => {
    return(
        <div>
            <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                <Link href="/">
                    <p> HYC Green BU </p>
                </Link>
                </li>
            </ul>
        </div>
    );
};

export default Logo;