import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddPet extends Component {

  constructor() {
    super();
    this.state = {
      listName: '',
      petName: '',
      imageURL: '',
      breed: '',
      age: '',
      gender: 'male',
      newPet: {}
    }
  }

  handleChange(e, property) {
    this.setState({ [property]: e.target.value });
    this.setState({ listName: this.props.idName });
    this.setState({ newPet: { [property]: e.target.value } });
  }

  handleSubmit(e) {
    window.location.reload();
    e.preventDefault();
    fetch('/addPet', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(
        {
          listName: this.state.listName,
          petName: this.state.petName,
          imageURL: this.state.imageURL,
          breed: this.state.breed,
          age: this.state.age,
          gender: this.state.gender,
          price: this.state.price,
          description : this.state.description
        }
      )
    });
    this.setState({
      petName: '',
      imageURL: '',
      breed: '',
      age: '',
      gender: 'male',
      price: ''
    });
  }

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className="addItemDiv">
        <form ref="form" className="row g-3" onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName} className="col">
            <input type="text" className="form-control form-control-sm" placeholder="Pet Name" ref="petName" value={this.state.petName} onChange={(e) => this.handleChange(e, "petName")} />
            <input type="text" className="form-control form-control-sm" placeholder="Image URL" ref="imageURL" value={this.state.imageURL} onChange={(e) => this.handleChange(e, "imageURL")} />
            <input type="text" className="form-control form-control-sm" placeholder="Breed" ref="breed" value={this.state.breed} onChange={(e) => this.handleChange(e, "breed")} />
            <input type="text" className="form-control form-control-sm" placeholder="Description" ref="description" value={this.state.description} onChange={(e) => this.handleChange(e, "description")} />
            <input type="number" className="form-control form-control-sm" placeholder="Age" ref="age" value={this.state.age} onChange={(e) => this.handleChange(e, "age")} />
            <input type="number" className="form-control form-control-sm" placeholder="Price" ref="price" value={this.state.price} onChange={(e) => this.handleChange(e, "price")} />
            <p> </p>
            <input type="radio" name="gender" value="male" onChange={(e) => this.handleChange(e, "gender")} />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" onChange={(e) => this.handleChange(e, "gender")} />
            <label for="female">Female</label>
          </div>
          <div><button className="btn btn btn-secondary btn-sm" type="submit">Add Pet</button></div>
        </form>
      </div>
    );
  }

}


export default AddPet;
