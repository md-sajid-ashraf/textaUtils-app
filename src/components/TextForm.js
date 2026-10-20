import React, { useState } from 'react'
// import { Link } from "react-router-dom";


export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpbtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")

    }

    const handleLobtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }

    const handleTitleCase = () => {

        let newText = text.split(" ");
        let newText1 = "";
        for (const element of newText) {
            newText1 += element.slice(0,1).toUpperCase() + element.slice(1)  + " ";
        }
        setText(newText1);
        props.showAlert("Converted to TitleCase", "success")

    }

    const handleItalicBtn = () => {
        document.getElementById("mybox").style.fontStyle = "italic";
        props.showAlert("Text has been italic", "success")

    }

    // string copy into clipboard function 
    const handleCopyBtn = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success")

    }

    const downloadFile = () => {
        if (text === "") {
            props.showAlert("You must write in the text area", "warning")

        } else {
            const file = new File([text], "New Text Document.txt", { type: "text/plain;charset=utf-8" });
            console.log(file);
            const url = window.URL.createObjectURL(file);
            const element = document.createElement('a');
            element.style.display = "none"
            element.href = url;
            element.download = file.name;
            element.click();
            window.URL.revokeObjectURL(url);
            props.showAlert("Download started", "success")
        }
    }

    const handleClearbtn = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className={`container my-2 align-item-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="mb-3">
                    <h2>TextArea: <span > write text to analyze.</span></h2>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleUpbtn}>UpperCase</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleLobtn}>LowerCase</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleTitleCase}>Title Case</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleItalicBtn}>Italic </button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleCopyBtn}>Copy Text</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={downloadFile}>Download Text</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={handleClearbtn}>Clear All</button>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <p> {text === "" ? "0" : text.trim().split(/\s+/).length} Words and {text.length} Characters</p>
                <h3>Preview</h3>
                <p style={{ height: '40px' }}>{text}</p>
            </div>
        </>
    );
}
