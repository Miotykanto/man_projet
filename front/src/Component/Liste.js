import React, { Component } from "react";
import './liste.css'

class Liste extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:8080/List")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
}
 
  render() {
    return (
      <div>    

        <button onClick={()=> {
            var test=this.state.apiResponse
            console.log(JSON.parse(test));
           var test2=JSON.parse(test)

            
            for(let i=0;i<test2.length;i++){ 
              
              let h="http://localhost:8080"+test2[i].image
              document.getElementById('va').innerHTML+="<p id='nom'>"+"<p id='im'>"+" <img className='bla' src='"+h+ "'width='50'/>"+"</p>"+ "<br/>" +"Nom :"+test2[i].nom+" "+"<br/>"+"Prenom :"+test2[i].prenom+ "</p>"+"<br/>" 
              


            }
            
           }}>Liste</button>

{/* <button onClick={()=> {
     var Liste=this.state.apiResponse
     var test2=JSON.parse(Liste)
 
  
   console.log(test2);
   var tab=[]
   for (let j=0;j<test2.length;j++){
    tab.push(test2[j].nom)

  }  
  tab.sort()
   for(let i=0;i<tab.length;i++){ 
     for (let k=0;k<tab.length;k++){
       if(tab[i]==test2[k].nom){
        document.getElementById('zz').innerHTML+=tab[i]+" "
        document.getElementById('zz').innerHTML+=test2[k].prenom+"<br/>"
      }
    }

  }
          
         }}>try</button> */}

{/* <button onClick={()=> {
     var Liste=this.state.apiResponse
     var test2=JSON.parse(Liste)
 
  
   console.log(test2);
   var tab=[]
   for (let j=0;j<test2.length;j++){
    tab.push(test2[j].nom)

  }  
  tab.sort()
   for(let i=tab.length;i>=0;i--){ 
     for (let k=0;k<tab.length;k++){
       if(tab[i]==test2[k].nom){
        document.getElementById('tso').innerHTML+=tab[i]+" "
        document.getElementById('tso').innerHTML+=test2[k].prenom+"<br/>"
      }
    }

  }
          
         }}>detry</button> */}

        <div id="va"></div>
       
       
      </div>
    );
  }
}

export default Liste;