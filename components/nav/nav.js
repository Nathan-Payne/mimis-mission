import Link from "next/link"
import NavLink from "./nav-link"
import NavLinkWrapper from "./nav-link-wrapper"

const Nav = () => {
    return (
        <nav className="w-full fixed px-4 sm:px-6 flex justify-between items-center text-xl border-b-2 border-neutral-800">
            <div>
                <Link href="/">
                    logo
                </Link>
            </div>
            <NavLinkWrapper>
                <NavLink href="/cafe" classes='border-l-2'>Cafe</NavLink>
                <NavLink href="/community">Community</NavLink>
                <NavLink
                    href="/youth"
                    classes='border-l-2 sm:border-l-0 border-t-2 sm:border-t-0'
                >
                    Youth Center
                </NavLink>
                <NavLink href="/about" classes='border-t-2 sm:border-t-0'>Our Story</NavLink>
            </NavLinkWrapper>
            <div className="hidden md:block">
                <NavLink href="/contact" classes="list-none border-l-2">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Nav
