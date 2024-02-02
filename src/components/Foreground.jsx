import Card from "./Card"

function Foreground() {

    let data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".4mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: "1.4mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        }
    ]


    return (
        <div className="fixed flex gap-10 flex-shrink-0 flex-wrap w-full h-screen bg-blue-100 p-4 z-[3] bg-opacity-30 ">
            {data.map((item, index) => {
                return <Card key={index} data={item} />
            })}
        </div>
    )
}

export default Foreground