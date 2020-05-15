import React from "react"
import "./style.css"

function MemeComponent(props) {
    return(
        <main>
                <form onSubmit={props.handleSubmit}>    
                    <input 
                        name="topText"
                        value={props.data.topText}
                        type="text"
                        onChange={props.handleChange}
                    />

                    <input 
                        name="bottomText"
                        value={props.data.bottomText}
                        type="text"
                        onChange={props.handleChange}
                    />

                    <button>Generate</button>

                      

                    <div className="meme">
                        <img src={props.data.randomImage} alt=""/>
                        <h2 className="top">{props.data.topText}</h2>
                        <h2 className="bottom">{props.data.bottomText}</h2>
                    
                    </div>
                </form>
            </main>
    )
}

export default MemeComponent