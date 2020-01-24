import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

    state={videos:[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('cricket')
    }

    onVideoSelected=(video)=>{
        console.log(video)
         this.setState({selectedVideo:video})
    }



    onTermSubmit=async(term)=>{
     const response=await youtube.get('/search',{
         params:{
             q:term
         }
     })
     this.setState({
         videos:response.data.items,
        selectedVideo:response.data.items[0]})
       
    }
    render(){
        return(
            <div className="ui container">
            <SearchBar onFormSubmitted={this.onTermSubmit}/>
            <div className="ui grid container stackable">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
                    <div className="five wide column"><VideoList videos={this.state.videos} onVideoItemSelected={this.onVideoSelected}/></div>
                </div>
            
            
            </div>
            

            </div>
        )
    }
}

export default App