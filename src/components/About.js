import React from 'react'
// import { Link } from "react-router-dom";

export default function About(props) {
    return (
        <div className={`container my-4 py-2 px-3  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} style={{ borderRadius: 10 + 'px', height: '469px' }} >
            <div className="my-2">
                <h2 >About Us</h2>
                TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation.The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
                <br />The most eminent features of the website are as follows :
            </div>
            <div className="accordion my-3 " id="accordionExample">
                <div className={`accordion-item my-2  bg-${props.mode}`} style={{ borderColor: 'white' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is a Simple Text Analyzer , which mutilates your text, but in a tender way.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item my-2 bg-${props.mode}`} style={{ borderColor: 'white' }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is completely free to use. No credit cards required. Use as much as you want!!
                        </div>
                    </div>
                </div>
                <div className={`accordion-item my-2 bg-${props.mode}`} style={{ borderColor: 'white' }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is compatible with all of your favorite browsers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
