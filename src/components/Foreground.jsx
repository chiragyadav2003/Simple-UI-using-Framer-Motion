import Card from "./Card"
import { useRef } from "react"
function Foreground() {
    const ref = useRef(null)
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
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize: "1.4mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        }
    ]


    return (
        <div ref={ref} className="fixed flex gap-10 flex-shrink-0 flex-wrap w-full h-screen bg-blue-100 p-4 z-[3] bg-opacity-[0.1] ">
            {data.map((item, index) => {
                return <Card key={index} reference={ref} data={item} />
            })}
        </div>
    )
}

export default Foreground