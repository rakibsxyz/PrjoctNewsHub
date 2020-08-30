import React from 'react';
import  Parser from 'rss-parser';
import Axios from 'axios';
let parser = new Parser();

export default class Rss extends React.Component {
    constructor() {
        super();
        this.state = { feed: [], printableDate:[] };
    }

    componentDidMount() {
      Axios.get("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true")
      .then((response) =>{
        //   console.log(response.data.regionData[0])
        this.setState({ feed: response.data.regionData})
        for(var i=0; i< this.state.feed.length;i++){
            if(this.state.feed[i].country =='World' || this.state.feed[i].country =='India' || this.state.feed[i].country =='Bangladesh')
                this.state.printableDate.push(this.state.feed[i])
        }
        this.setState({})
        
      })
      .catch((err) =>{
          console.log("problem man")
      })
       

    }
    renderElement(item){
        if(item.country =='World' || item.country =='India' || item.country =='Bangladesh')
           return (<tr>
               <td>{item.country}</td>  <td>{item.newCases}</td>  <td>{item.totalCases}</td>  <td>{item.country}</td>  <td>{item.totalDeaths}</td> <td>{item.newDeaths}</td> <td>{item.totalRecovered}</td>
           </tr> )         
             ;
        return null;
     }

    render() {
        return (
            <div>
               <h4>Corona Update</h4>
                <table> <tr>
                <th>Country</th>
                <th>New cases</th>
                <th>Total cases</th>
                <th>New Deaths</th>
                <th>Total Deaths</th>
                <th>Total Recovered cases</th>
                
                </tr>
            {this.state.printableDate && this.state.printableDate.map((item, i) => (
                <tr>
               <td>{item.country}</td>  <td>{item.newCases}</td>  <td>{item.totalCases}</td>  <td>{item.newDeaths}</td>  <td>{item.totalDeaths}</td> <td>{item.totalRecovered}</td>
           </tr>       
            ))
            }
            </table>
            </div>
        );
    }
}