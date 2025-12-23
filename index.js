import React, { createElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './compont/App';
import './index.css';
import y from './p1.png'
import Pays from "./Pays"
import { render } from '@testing-library/react';
import { Component } from 'react';  
import { L } from './data';
import Candidature from './condida';
import Formulaire from './formulaire';
import GererTache from './tach';
import Afficher from './afficher';

// let x = React.createElement("li", {}, "oujda")
// let x1 = React.createElement("li", {}, "casa")
// let x2 = x = React.createElement("li", {}, "tanger")
// let y = React.createElement("ul", {}, x, x1, x2)
// let t = ["oujda", "tanger", "rabat"]
// let e = React.createElement("ol", {}, t.map((v, i) => React.createElement("li", {}, v)))


// let dev = React.createElement("dev", {}, y, e)

// let e = React.createElement("input", { type: "text", placeholder: "saisire votre nom" }, )
// let c = React.createElement("input", { type: "text", placeholder: "saisirevotre prenom" })
// let d = React.createElement("br", {})
// let f = React.createElement("button", { value: "submit" }, " envoyer")
// let form = React.createElement("form", {}, e, c, d, f)



// let somme = (a, b) => a + b
// let x = < h1 > hello avec jsx </h1> ;
// let nom = "ahmed"
// let y = < p > salam,
//     { nom }, { 10 + 20 }, som = { somme(5, 5) } { x } </p>
// let d = < div style = {
//     { backgroundColor: "red" }
// }
// className = 'c1' > { y }, < a href = '' > </a></div >




// function getGreeting(a) {
//     if (a > 10)
//         return <h1 > salam alikom a = { a }
//     est sup a 10 </h1>
//     else {
//         return <h3 className = 'c1' > la valeur { a }
//         est inf a 10 </h3>
//     }

// }

// let dev = < dev > { getGreeting(8) },
//     { getGreeting(15) } </dev>



// let x= "http://ista.com"
// let a=<a href={x}>lien vers site web <img src={y} width="50"/></a>




// const element=document.getElementById("root");
// const root=ReactDOM.createRoot(element)
// function Voiture(){
// const marque='Honda'
// const chevaux=8
// const voiture={marque,chevaux}
//  return ( <>
//  <h3>Marque:{voiture.marque}</h3>
//  <h3>chevaux:{voiture.chevaux}</h3>
//  </>)
// }
// root.render(<Voiture/>)




// const element=document.getElementById("root");
// const root=ReactDOM.createRoot(element)
// function Voiture(){
// const marque='Honda'
// const chevaux=8
// const voiture={marque,chevaux}
//  return ( <>
//  <h3>Marque:{voiture.marque}</h3>
//  <h3>chevaux:{voiture.chevaux}</h3>
//  </>)
// }
// root.render(<Voiture/>)




 

// let r = ReactDOM.createRoot(
//     document.getElementById("root"));
// r.render(x)









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// let v=["oujda","rabat","casa"]
// let n="morocco"


// const element=document.getElementById("root");
// const root=ReactDOM.createRoot(element)
// root.render(<Pays name={n} villes={v}/>)




// //coposant function 
// let Compteur =(props)=>{
// let [n,setN]=useState(props.start)

// let augmenter=()=>{setN(n+1);console.log(n)}

//     return <div>
//             n={n}
//             <button onClick={augmenter}>+</button>
//         </div>
// }


// class Compteur1 extends Component{
//     constructor(props){
//     super(props)
//         this.State={n:this.props.start}
//     }
    

// augement=()=>{  }
// render(){
    
//         return <div>
//         n ={this.state.n}
//         <button onClick={this.augement}>+</button>
//     </div>
    
// }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<><Compteur start={5}/><Compteur start={5}/></>)


// //classe ver function
// let Message=(props)=>{
//     let [n,setN]=useState(props.start)
    
//     let augement=()=>{setN(n+"salam");console.log(n)}

// return <div>
//     n={n}
//     <button onClick={augement}>+</button>
// </div>

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Message start={"salam"}/>)




// let Calcule=(props)=>{
//     let [n,setN]=useState(props.start)
//     let calculer=()=>{setN(n+1);console.log(n)}
//     let calculer1=()=>{setN(n-1);console.log(n)}
//     let calculer2=()=>{setN(n*0);console.log(n)}



//     return <div>
//         n={n}
//         <button onClick={calculer}>+</button>
//          <button onClick={calculer1}>-</button>
//           <button onClick={calculer2}>rest</button>
//     </div>
// }


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calcule start={0}/>)


// function InpF(props){

// let [x,setX]=useState(props.start)
// let F1=(event)=>{let v=event.target.value
//     setX(v)
// }
// return <form>
//     <label>nom</label>
//     <input type="text" onChange={F1} />
//     <div>{x}</div>
// </form>


// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<InpF start={"sdgfs"}/>)


// class InpF extends Component{
//     constructor(props){
//     super(props)
//         this.state={n:this.props.start}
//     }
    

// f1=(event)=>{ 

//     this.setState({n:event.target.value})   }
// render(){
    
//         return <form>
//             <label>nom</label>
//             <input type="text" onChange={this.f1}  value={this.state.n} />

//             {this.state.n}
//         </form> 

// }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<><InpF start={"test"}/></>)


// function Livre(props)

// {

//     let id=props.id
//     let titre =props.titre
//     let prix=props.prix

//     return <li> {id} , {titre} ,{prix}</li>
// }


// function Livres (props){
  

// return <>

//     <div>

//       <ul>
//         {[...props.T].map((v,i)=>{
//                 return <Livre id={v.id} key={i} titre={v.titre} prix={v.prix}/>
//         })}
//         </ul>
 
//     </div>
// </>


// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<><Livres T={L} /></>)

// function Calculer2(props){
//     let[a ,setA]=useState(0)
//     let[b ,setB]=useState(0)
//     let[s, setS]=useState(0)
//  let f1=()=>{
//     setS(a+b)
//  }
    
//     return <div>
//         <input type='number' value={a} onChange={(event)=>{setA(parseFloat(event.target.value))}}></input>
//         <input type='number' value={b} onChange={(event)=>{setB(parseFloat(event.target.value))}}></input>
//         <button type='button' onClick={f1}>+</button>
//         <p>{s}</p>
//     </div>
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calculer2 />)


// function Calculatraice(props){

// let [a,setA]=useState(0)
// let [b,setB]=useState(0)
// let [s,setS]=useState(0)
// let [message,setMessage]=useState("")
// let f1=()=>{
//     setS(a+b)
// }
// let f2=()=>{
//     setS(a-b)
// }
// let f3=()=>{
//     if(b==0){ 
//         setMessage("ereur")
//     }else{
//         setS(a/b)
//     }
// }
// let f4=()=>{
//     setS(a*b)
// }


// return <form>
//     <input type='number' value={a} onChange={(event)=>{setA(parseFloat(event.target.value))}}/>
//     <input type='number' value={b} onChange={(event)=>{setB(parseFloat(event.target.value))}}/>
//     <button type='button' onClick={f1}>+</button>
//     <button type='button' onClick={f2}>_</button>
//     <button type='button' onClick={f3}>/</button>
//     <button type='button' onClick={f4}>*</button>
//     <button type='reset'>renilisation</button>
//     <div >{s}</div>
//     <div>{message}</div>
// </form>

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(< Calculatraice/>)


// function Equation(props){

//     let [a,setA]=useState()
//     let[b,setB]=useState()
//     let[m,setM]=useState("")
//     let[s,setS]=useState("")
//     let f1=()=>{
   
//       if (a==0&&b==0) {
//         setM("pas logique")
//       } else {
//         setM('solution de equation est x=')
//         setS((-1)*b/a)
//       }
//     }
 

//     return <form>
        
//     <input type='number'  value={a} onChange={(event)=>{setA(parseFloat(event.target.value))}}/>
//     <input type='number' value={b} onChange={(event)=>{setB(parseFloat(event.target.value))}}/>
//     <button type='button' onClick={f1}>calculer</button>
//     <span>{m}</span>
//     <span>{s}</span>
//     </form>
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(< Equation/>)






// function Inscription (props){

// let[a,setA]=useState("")
// let[b,setB]=useState("")
// let[m,setM]=useState("")

// let f1=()=>{
//  setM("le nome est "+a+"le prenom est "+b)



// }

//     return <form >
//         <label>nom</label><input type='text'value={a} onChange={(event)=>{setA(event.target.value)}}/>
//         <label>prenom</label><input type='text'value={b} onChange={(event)=>{setB(event.target.value)}}/>
//         <button type='button' onClick={f1}>afficher</button>
//         <span>{m}</span>
  

//     </form>

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Inscription />)


// function ManipuleTableau (props){
//     let[v,setV]=useState([...props.T])
//     let[a,setA]=useState("")
//     let f1=(event)=>{setA(event.target.value)}
  


//     return <form>
//         <label>ville</label>
//         <input type='text' value={a} onChange={f1}></input>
//         <button type='button' onClick={()=>{setV([...v,a])}}>ajouter </button>
//         <button type='button' onClick={
//             ()=>{
//                 setV(v.filter((k,i)=>k!=a))
//         }}>suprimer</button>
//         <ul>
//             {
//             v.map((k,i)=>{
//                 return <li key ={i} >{k}</li>})
//                 }    
//        </ul>
//     </form>
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
//     root.render(<ManipuleTableau T={["oujda","casa"]}  />)


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Candidature  T={["sou","mah"]}/>)


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<GererTache T= {[]}/>)




// let Message=(props)=>{
// let[M,setM]=useState('')
// let f1=()=>{
//     setM(M+'salam')
// }
// return(
//     <div >
//     <button onClick={f1}>click</button>
//     <div>{M}</div>
//     </div>
    
// )
// }

// let Mehdi=(props)=>{
//     let[m,setM]=useState('')
//     let fg=()=>{setM(m+"salam")
//     }
//     return <div>
//         <button onClick={fg}>onClick</button>
//         <h3>{m}</h3>
//     </div>
    
// }







// let Conter=()=>{
//     let[c,setC]=useState(0)
//     let[p,setP]=useState(0)
//     useEffect(()=>{
//         document.title=`c=${c} et p=${p}`
  
//     },[p]);
//     let augementer=()=>{
//         if(c%10==0){setP(a=>a+10)}
//         setC(a=>a+1)
//     }
//     return<><button onClick={augementer}> +</button> c={c}</>

// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(< Conter/>);





import axios from 'axios';

const UserListAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data); 
      } catch (error) {
        console.error("Error with axios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid gray', padding: '10px' }}>
          {/* Content same as above */}
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>UserName:</strong> {user.username}</p>
          <p>{user.email}</p>
          <h5>Address:</h5>
          <p>{user.address.street}...</p>
        </div>
      ))}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< UserListAxios/>);












