import React from 'react';
// import axios from 'axios';

class CreateBook extends React.Component{


    // componentWillMount() {
    //   axios.get('https://fullstack-book.ariefdfaltah.com/book/list?key=elan')
    //    .then(res => {
    //      console.log(data)
    //      this.setState({
    //        post: res.data
    //      })
    //    })
    // }
  
    render() {
      return(
        <div class="container">
          <input type="text" placeholder="title"/>
          <input type="text" placeholder="category"/>
          <textarea type="text" placeholder="description"/>
          <button type="submit">Tambah</button>
        </div>
      )}
  
  }
  
export default CreateBook;