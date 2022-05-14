import "./post.css"
import "../Edit/edit.css"

import { createPost } from "../../Redux/postSlice"
import { useState } from "react"
import Input from "../InputField/input"
import { useDispatch } from "react-redux"

const MakePost = (props) => {
    const { setOpen } = props
    const dipatch = useDispatch()
    const [title, setTitle] = useState("Add a title")
    const [desc, setDesc] = useState("Add some description")
    const [selectedIdx, setSelectedIdx] = useState(0)
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]

    const handlePost = () => {
        setOpen(false);
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIdx
        }
        dipatch(createPost(newPost))
    }
    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
            <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classStyle="makepost-desc" />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, index) => {
                    return (
                        <button key={index} className={`${selectedIdx === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}
                            onClick={() => setSelectedIdx(index)}
                        >{tag}</button>
                    )
                })}
            </div>
        </section>
    )
}

export default MakePost