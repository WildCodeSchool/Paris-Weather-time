import React, {Component} from 'react'
import'./DisplayActivity.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Home from '../screen/Home';
class DisplayActivity extends Component{
    state = {
        activity: {},
    
        }
        
            getActivity = async () => {
                const id = this.props.id
                const result = await axios.get(
                    `https://remy-j.github.io/id/${id}.json`
                )
                this.setState({activity: result.data})

            }
           
            componentDidMount() {
                this.getActivity()
            }
            render() { 
               
                
        console.log(this.state.activity)
                const {name, image, price, alt} = this.state.activity
        return(
            <div className="result">
                <p>
                    {name}
                </p>
                <img src={image} alt={alt}/>
                
                <p>
                    {price}
                </p>
                <Link to="/">
                
                   <h2>RESERVER</h2> 
                
                </Link>
            </div>

        )
    }
}

export default DisplayActivity