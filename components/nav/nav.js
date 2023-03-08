import Link from "next/link"
import NavLink from "./nav-link"
import NavLinkWrapper from "./nav-link-wrapper"

const Nav = () => {
    return (
        <nav className="w-full px-6 flex justify-between items-center border-b-2 border-neutral-800">
            <div>
                <Link href="/">
                    logo
                </Link>
            </div>
            <NavLinkWrapper>
                <NavLink href="/cafe" classes='border-l-2'>Cafe</NavLink>
                <NavLink href="/community">Community</NavLink>
                <NavLink href="/youth">Youth Center</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
            </NavLinkWrapper>
            <div>
                mimi deets / contact
            </div>
        </nav>
    )
}

export default Nav
