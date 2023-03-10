import RichText from '../text/rich-text'

const PageHeader = ({ blok }) => {
    console.log('blok', blok)

    return (
        <div className='min-h-fit w-full mx-2 mb-8 md:mb-12 md:mt-4 xl:m-20 flex flex-col md:flex-row'>
            <h1 className='w-full md:w-1/3 lg:1/4 xl:w-1/5 font-bold text-5xl md:pt-2 pb-2 text-center'>
                {blok.title}
            </h1>
            <div className='flex-1 flex flex-col items-start justify-center'>
                <RichText content={blok.description.content} />
                <div>
                    {blok.link.id}
                </div>
            </div>
        </div>
    )
}

export default PageHeader
