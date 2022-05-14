import "../Edit/edit.css"
import "../Post/post.css"
const Input = (props) => {
    const { inputType, classStyle, label, data, setData } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? (
                <textarea
                    className={classStyle}
                    type="text"
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />) : (<input
                    type="text"
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}

                />)}
        </>
    );
};
export default Input;
