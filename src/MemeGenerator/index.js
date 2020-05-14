import React, {Component} from "react"
import "./style.css"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => { 
                console.log(data) 
                //const {memes} = data
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })

        console.log(this.state.allMemeImages)
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        const urlRandomImage = this.state.allMemeImages[randomNumber].url
        this.setState({randomImage: urlRandomImage})
    }

    render() {
        return(
            <main>
                <form onSubmit={this.handleSubmit}>    
                    <input 
                        name="topText"
                        value={this.state.topText}
                        type="text"
                        onChange={this.handleChange}
                    />

                    <input 
                        name="bottomText"
                        value={this.state.bottomText}
                        type="text"
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>

                      

                    <div className="meme">
                        <img src="http://i.imgflip.com/1bij.jpg" alt=""/>
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    
                    </div>
                </form>
            </main>
        )
    }
}

export default MemeGenerator