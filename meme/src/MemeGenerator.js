import React, {Component} from "react"


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [], 
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=> response.json())
            .then(response=>{
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })

    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }
    render(){

    return(
        <div>
            <form className="meme-form">
                <input 
                    name="topText" 
                    type="text" 
                    placeholder = "Top TEXT" 
                    value ={this.state.topText} 
                    onChange = {this.handleChange}/>
                <input 
                    name="bottomText" 
                    type="text" 
                    placeholder = "Bottom TEXT" 
                    value={this.state.bottomText} 
                    onChange = {this.handleChange}/>

            <button>Gen</button>
            </form>
            <div className="meme">
                <img src={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>

        </div>
    )
    }
}

export default MemeGenerator