import Link from 'next/link'

const NavLink = ({ href, children, classes = "" }) => {
    // todo: active route styles https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx

    return (
        <li className={`h-20 border-r-2 border-neutral-800 hover:bg-green-400 ${classes}`}>
            <Link href={href} className='flex items-center w-full h-full px-12'>{children}</Link>
        </li>
    )
}

export default NavLink
