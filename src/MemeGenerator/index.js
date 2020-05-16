import React, {useState, useEffect} from "react"
import "./style.css"

function MemeGenerator() {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [randomImage, setRandomImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setAllMemeImages(memes)
            })        
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const urlRandomImage = allMemeImages[randomNumber].url        
        setRandomImage(urlRandomImage)
    }

    return(
        <main>
                <form onSubmit={handleSubmit}>    
                    <input 
                        name="topText"
                        value={topText}
                        type="text"
                        onChange={e => setTopText(e.target.value)}
                    />

                    <input 
                        name="bottomText"
                        value={bottomText}
                        type="text"
                        onChange={e => setBottomText(e.target.value)}
                     />

                    <button>Generate</button>

                    <div className="meme">
                        <img src={randomImage} alt=""/>
                        <h2 className="top">{topText}</h2>
                        <h2 className="bottom">{bottomText}</h2>
                    
                    </div>
                </form>
            </main>
    )
}

export default MemeGenerator