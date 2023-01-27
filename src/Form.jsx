import React, { useState, useEffect, useRef } from "react";
import "./form.css"
function Form() {
    const [text, setText] = useState("")
    const Fouc = useRef()

    console.log(text)

    useEffect(() => {
        console.log("rander")
    }, [text])

    return <div className="Form">
        <label className="form_name">My name is {text}</label>
        <input ref={Fouc} className="form_input" min="3" onChange={(e) => setText(e.target.value)} required value={text} type="text" maxLength="15" />
        <button style={{
            "borderRadius": "0px 0px 13px 13px",
            "background-color": "#a8a5a54d",
            "border": "1px solid", "cursor": " pointer"
        }} type="submit" onClick={() => {
            Fouc.current.focus();
        }}>onClick</button>
    </div>
}

export default Form


// const resizeFun = ()=>{
// setText(window.innerWidth)
// }

// console.log(text)

// useEffect(()=>{
// window.addEventListener('resize',resizeFun())
// return ()=>{
// window.removeEventListener('resize',resizeFun())
// }

// },[])