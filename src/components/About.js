import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color :"#212529",
    //     backgroundColor : 'white'
    // });

    // const [btnText,setbtnText] = useState("Enable Dark Mode");
    // const toggleStyle = ()=>{
    //     if(myStyle.color === "#212529"){
    //         setmyStyle({
    //             color :'white',
    //             backgroundColor : "#212529"
    //         })

    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color :"#212529",
    //             backgroundColor : 'white',
    //             border : '2px solid white',
    //         })

    //         setbtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <div className="container" style = {{backgroundColor: props.mode==='dark'?'#212529':'white'}}>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"  style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is TextUtils?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }}>
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }} >
            <strong>TextUtils</strong> is a user-friendly text manipulation tool that simplifies the process of converting text to uppercase or lowercase. TextUtils also offers a convenient dark mode feature, providing a visually pleasing and comfortable interface for users and enhancing the readability of the text.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How does TextUtlis works?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }}>
                You just to paste or enter you text in the TextArea and after just click on the given buttons to manipulate your text.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Does it have a Dark Mode?
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }} >
               Yes! If you are on your Desktop, then on the top right corner on your screen there is an <strong>Enable Dark Mode</strong> option. Otherwise you need to click on the menu bar and then click on <strong>Enable Dark Mode</strong>.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
