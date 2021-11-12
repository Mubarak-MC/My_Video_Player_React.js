import React, { Component } from 'react'
import { createClient } from 'pexels';

// const client = createClient(ad6f91700001000001507d2befd08a4867b7928442c5ceee5a);

// client.videos.popular({ per_page: 1 }).then(videos => {...});


export class Videoitem extends Component {
    render() {
       
        let {title, description,poster,progressive}=this.props;
        return (
            
            <div className="my-3">
                
                <div className="card" style={{width: "25rem"}}>
  <img src={poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={progressive} className="btn btn-sm btn-primary">Play Video</a>
  </div>
</div>

            </div>
        )
    }
}

export default Videoitem
