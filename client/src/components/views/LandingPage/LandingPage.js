import React, { useState, useEffect } from 'react'
import YtPlayer from './sections/YtPlayer'
import { FaCode } from "react-icons/fa";
import Axios from 'axios'
import './sections/channelCss.css'
import Rss from './sections/RssTest'
  

function LandingPage() {

    const [videoId, setvideoId] = useState();
    const [channelObjectArray, setchannelObjectArray] = useState([])
    const [channelInfo, setchannelInfo] = useState([])

    useEffect(() => {
        // setvideoId("2g811Eo7K8U");

        Axios.get(`http://localhost:5000/getBDNewsChannelLinks`)
            .then((res) => {
                // setchannelObjectArray(channelObjectArray.push(res.data))
                // console.log(channelObjectArray);
                // for( var i =0; i< res.data.length;i++)
                //     setchannelInfo(channelInfo.push(res.data[i]))
                // console.log(channelInfo)
                setchannelInfo(res.data)
                console.log(channelInfo)
            })
            .catch((err) => {
                console.log("Problem man")
            })

    }, [])


return (
    <div className="flexContainerEighty">
  
    <Rss />
        <h3 >National News channels</h3>
    <div className="flex-container"  >
    
        {channelInfo && channelInfo.map((channel, id) =>(
           
                <YtPlayer videoId={channel.videoId} />
           
        )   ) 

        }
    </div>
    
    
    </div>


)
}

export default LandingPage
