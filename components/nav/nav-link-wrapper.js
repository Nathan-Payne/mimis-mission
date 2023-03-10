const NavLinkWrapper = ({ children }) => {
    return (
        <ul className="grid grid-cols-2 sm:flex sm:justify-center sm:items-center">
            {children}
        </ul>

    )
}

export default NavLinkWrapper
