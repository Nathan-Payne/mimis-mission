
const RichText = ({ content }) => {

    const renderContentBlock = () => {
        return content.map((section) => {
            return section.content.map((p) => {
                if (p.type === "text") return p.text
            })
        })
    }

    return (
        <article className="prose prose-lg lg:prose-xl prose-neutral">
            {renderContentBlock()}
        </article>
    )
}

export default RichText
