import React, {Component} from "react"
import MemeComponent from "./MemeComponent"

class MemeGenerator extends Component {
    state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
    

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {                 
                const { memes } = response.data                
                this.setState({allMemeImages: memes})
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })

        console.log(this.state.allMemeImages)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        const urlRandomImage = this.state.allMemeImages[randomNumber].url        
        this.setState({randomImage: urlRandomImage})
    }

    render() {
        return(
            <MemeComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state}/>
        )
    }
}

export default MemeGenerator