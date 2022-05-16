import React from 'react'
import memesData from '../memesData.js'
  

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const getMemeImage= () => {
        const memesArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url 
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    className='form--input'
                    placeholder=' Top text'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className='form--input'
                    placeholder=' Bottom text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className='form--button'
                    onClick={getMemeImage}
                >Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;