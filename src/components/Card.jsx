import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.15 }} className="relative overflow-hidden bg-black text-white h-72 w-60 rounded-[40px] py-10 px-8">
            <FaFileAlt />
            <p className="relative text-sm mt-5 font-semibold leading-tight ">{data.desc}</p>
            <div className=" footer w-full left-0  absolute bottom-0 ">
                <div className="flex items-center py-3 px-8 my-3 justify-between">
                    <h5>{data.fileSize}</h5>
                    <span className="h-7 w-7 bg-zinc-700 rounded-full flex items-center justify-center ">
                        {data.close ? <IoMdClose /> : <IoMdDownload />}
                    </span>
                </div>
                {data.tag.isOpen ? <div className={`tag w-full h-10  flex items-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} justify-center`}>
                    <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                </div> : null}
            </div>
        </motion.div>
    )
}

export default Card