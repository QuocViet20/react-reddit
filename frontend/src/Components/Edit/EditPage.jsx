import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../Redux/apiRequest"
import Input from "../InputField/input"
import "./edit.css"

const EditPage = (props) => {
    const { setEdit } = props
    const avaUrl = ["https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/149363449_1193276674422116_7832988712634675052_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=-pRfSQYcEwAAX-c1k_0&tn=LjgyvuWFs7Es5JIG&_nc_ht=scontent-lax3-2.xx&oh=00_AT_XMsxOAqq9qC7tqxbAxpwg4CLbWXvrmdtJLsCTD3ygOQ&oe=6279659B",
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/277298940_1456374788112302_9161532289809049094_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=j-Af9MBf22wAX90_Fwb&_nc_ht=scontent-lax3-2.xx&oh=00_AT-yTK91UAfI30m1gpkF5EHtyHzaXWK9fGGni51Q3IrTMA&oe=625B2746",
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/260107800_1372005676549214_3047553872734539160_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=C7Z9IMugIo8AX_ZRtoT&tn=LjgyvuWFs7Es5JIG&_nc_ht=scontent-lax3-1.xx&oh=00_AT-7TBTwR_JLaobLMoS8fnsBt85YEoN91dinIur7RWZHyA&oe=625B4BD1",
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/224043765_1300780300338419_7155415334383894147_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PXKZK7KCN88AX-fKGjc&_nc_oc=AQk4o1k_Tqos7Ln9_nKRYOgJWJyO8eae9mVk1oT2KQNazg4eGeWFHFhEMYn2M8kdfYs&_nc_ht=scontent-lax3-1.xx&oh=00_AT8-oy_zjpECTkPlo2VIH5fJ3zGZNnXnjwUe3NSejA0uLw&oe=625B056C",
        "https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/185741307_1250577905358659_4793322510528244744_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Qpy2pH5nNs4AX-gtGnG&_nc_ht=scontent-lax3-2.xx&oh=00_AT8Ld1Nnsr-DaZMoWthsTrzMHsiAZD6BYyH5T294YdZufw&oe=627A5240",
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/272945280_1417254842024297_3707897614021703011_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=I_Kh08DnSQkAX8rgqb2&_nc_ht=scontent-lax3-2.xx&oh=00_AT--jjzXpDo5ex25AO7FS-ujflrK2f-j46YdCLaYY80F6A&oe=6259E64F",
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/272868198_1417254795357635_658059993775331027_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=FbISpVf3YNIAX-96tox&_nc_ht=scontent-lax3-1.xx&oh=00_AT_6yvETRhpzY2nXhkHto85Iw7Sg6TeehGvS9FtFzsV2Nw&oe=62599EA4",
        "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/264324661_1382956692120779_320337216956548419_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1uguCMRiMGAAX8zl9Fs&tn=LjgyvuWFs7Es5JIG&_nc_ht=scontent-lax3-1.xx&oh=00_AT-5tXn9FK8eQR88ebTE4MUMzv3Ux8D4Zd6VWK7c9ojAOg&oe=6259CFB5",
        "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/251197096_1361728287576953_8794286261001655662_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=rhGX8IO5X2wAX-C3eZ1&_nc_ht=scontent-lax3-2.xx&oh=00_AT_BJ-Hq2Tu1_-TLzTHw60dHXObKbHbuEzk-sq9jaA_cBw&oe=625B4DCF"
    ]
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState("#ff9051")
    const [url, setUrl] = useState(user.avaUrl)

    const handleSubmit = (e) => {
        e.preventDefault(e)
        setEdit(false)
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme
        };
        updateUser(updatedUser, dispatch)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">SAVE</button>

                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input label="Display Name" data={user.name} setData={setName} />
                        <Input label="Age" data={user.age} setData={setAge} />
                        <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbout} />

                        <label>Profile Picture</label>
                        <div className="input-image-container" >
                            {avaUrl.map((url) => {
                                return (
                                    <>
                                        <img onClick={(e) => setUrl(e.target.src)} src={url} className="input-image" alt="" />
                                    </>
                                )
                            })}
                        </div>
                        <div className="theme-container">
                            <label>Theme</label>
                            <input type="color" className="theme-color" onChange={(e) => setTheme(e.target.value)} />
                        </div>
                    </div>
                </section>
            </form>
        </>
    )

}
export default EditPage
