import React, { Component } from 'react'
import './DisplayActivity.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DisplayActivity extends Component {
    state = {
        activity: {},

    }

    getActivity = async () => {
        const id = this.props.id
        const result = await axios.get(
            `https://asmamoutaoukil.github.io/ActivityAPI/id/${id}.json`
           // https://remy-j.github.io/id/${id}.json
        )
        this.setState({ activity: result.data })

    }

    componentDidMount() {
        this.getActivity()
    }
    render() {



        const { name, image, price, alt } = this.state.activity
        return (
            <div className="result">
                <p className="nom">
                    {name}
                </p>
                <img src={image} alt={alt} className="act" />
                <div className="lorem">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae.
                </p>
                </div>
                <p className="price">
                    {price}
                </p>
                <Link to="/">
                    <div  className="reserver">
                        <h2>RESERVER</h2>
                    </div>
                </Link>
            </div>

        )
    }
}

export default DisplayActivity