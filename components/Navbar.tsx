import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2. cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={50}
                        height={48}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems/>
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar