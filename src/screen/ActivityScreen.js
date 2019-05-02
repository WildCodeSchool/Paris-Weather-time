import React,{Component } from 'react'

import DisplayActivity from '../components/DisplayActivity'
class ActivityScreen extends Component {
 
    render() {


         
        return(
            <div>
                <DisplayActivity id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default ActivityScreen