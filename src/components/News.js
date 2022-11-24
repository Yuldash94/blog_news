import React, { Component } from 'react'


export class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }
  componentDidMount() {
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-23&to=2022-11-23&sortBy=popularity&apiKey=fb10e9c404ac4aec830b6817ae0a049d'
    fetch(url)
    .then(res => res.json())
    .then((result) => {
      this.setState({isLoaded: true,
      items: result.articles})
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      })
    }
    )
  }


  render() {
    const {error, isLoaded, items} = this.state
    if (error) {
      return <p className='error'>Error: {error.mesage}</p>
    } else if (!isLoaded) {
      return <p>Loading</p>
    } else {
      return (
        <div className='news'>
          {items.map((item) => {
            return (
              <div  className='item'>
                <h3 >{item.title}</h3>
                <img src={item.urlToImage}  className='img' alt=''/>
                <p className='description'>{item.description}</p>
                <p className='time'>{item.publishedAT}</p>
              </div>
            
            )
          })}
        </div>
      )
    }
  }
}

export default News