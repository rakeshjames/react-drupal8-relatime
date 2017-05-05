import React, { Component } from 'react';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    };
  };

  componentWillMount() {
    var self = this;
    setInterval(function() {
      fetch("http://dc.lo/api/sessions?_format=api_json").then( (response) => {
        return response.json() })
          .then( (json) => {
            console.log('raw json', json);
             var arr = [];
             for (var prop in json) {
               arr.push(json[prop]);
             }
            // console.log('arr json', arr);
            self.setState({data: arr});
      });
    });
  };

  render() {
    var title = this.state.data.map(node=>node.title);
    var nid = this.state.data.map(node=>node.nid);
    var description = this.state.data.map(node=>node.field_description);
    return (
      <h1>Hello, {title}</h1>
    );
  }
}
