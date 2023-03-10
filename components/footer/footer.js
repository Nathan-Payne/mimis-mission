
const Footer = () => {
    const titleClasses = "font-semibold block 2xl:inline-block"

    return (
        <div
            className="
                fixed bottom-0 left-0 right-0 w-screen px-8 py-2
                border-t-2 border-neutral-800 bg-orange-50 font-merri text-md md:text-lg xl:text-lg
                hidden sm:grid grid-cols-2 grid-rows-3 lg:grid-rows-1 xl:grid-cols-5 gap-2"
        >
            <div className="row-span-3 lg:row-span-1 xl:col-span-2">
                <span className={titleClasses}>Address: </span>
                <p>The Gatehouse, Manby Business Park, Manby, Lincolnshire, LN11 8UR</p>
            </div>
            <div><span className={titleClasses}>Telephone: </span> <p>01507 327860</p></div>
            <div><span className={titleClasses}>Mobile: </span> <p>07377 138651</p></div>
            <div><span className={titleClasses}>Email: </span> <p>mimis.mission@yahoo.com</p></div>
        </div>
    )
}

export default Footer
