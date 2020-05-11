import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Post from './post/Post';
// import ListBook from'./Lis'


class ListBook extends Component{

  // ------------------------- menampung data dalam bentuk array ----------------------------------------
  state = {
    list: [],
    formListBook: {
      title: '',
      category: '',
      description: '',
    }
  }

  // -------------------------- method get data from api ----------------------------------------
  getPostAPI = () => {
    axios.get('https://fullstack-book.ariefdfaltah.com/book/list?key=elan')
    // .then(res => res.json())
    .then(res => {
      console.log(res.data.data);
      this.setState({
        list: res.data.data
      })
    })
  }

  postDatatoApi = () => {
    axios.post('https://fullstack-book.ariefdfaltah.com/book/create?key=elan', this.state.formListBook)
    .then((res) => {
      console.log(res)
      this.getPostAPI();
    }, (err) => {
      console.log('error : ', err)
    })
  }

  // ------------------------------ method delete data from api -------------------------------------
  handleHapus = (data) => {
    console.log(data)
    axios.get(`https://fullstack-book.ariefdfaltah.com/book/delete/${data}?key=elan`)
    .then((res) => {
      console.log(res);
      this.getPostAPI()
    })
  }

  handleFromChange = (e) => {
    // console.log('from change', e.target)
    let formListBookNew = {...this.state.formListBook};
    console.log(e.target.name);
    formListBookNew[e.target.name] = e.target.value;
    // let title = e.target.value
    // let category = e.target.value
    // let description = e.target.value
    this.setState ({
      formListBook: formListBookNew
    }, () => {
      // console.log('value obj formListBook : ', this.state.formListBook)
    })
  }

  handleSubmit = () => {
    // console.log(this.state.formListBook);
    this.postDatatoApi();
  }

  // ------------------------------ show all data -------------------------------------
  componentDidMount(){
    this.getPostAPI();
  }

  // ------------------------------ render data -------------------------------------
  render(){
    return(
      <Fragment>
        <p>Hello</p>
        <div className="form-add-data">
          <label hrmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="title" onChange={this.handleFromChange} />
          <label hrmlFor="category">Category</label>
          <input type="text" id="category" name="category" placeholder="category" onChange={this.handleFromChange} />
          <label hrmlFor="description">Description</label>
          <input type="text" id="description" name="description" placeholder="description" onChange={this.handleFromChange} />
          <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
        </div>
        {
          this.state.list.map(list => {
            return <Post key={list.id} data={list} hapus={this.handleHapus} />
          })
        }
      </Fragment>
    )
  }
 
}

// ------------------------------ export function -------------------------------------
export default ListBook;