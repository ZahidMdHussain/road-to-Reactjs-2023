import React from 'react';
import ReactDOM  from 'react-dom/client';

// Nested Elemet creation using React.createElement
    // const title = React.createElement('div',{className: 'title'}, 
    // [
    //     React.createElement('h1',{key:"1"},"Heading 1"), 
    //     React.createElement('h2',{key:"2"},"Heading 2"), 
    //     React.createElement('h3',{key:"3"},"Heading 3")
    // ])

// Creating Nested element using JSX
    // const title = (
    // <div className='title'>
    //     <h1>Heading 1</h1>
    //     <h2>Heading 2</h2>
    //     <h3>Heading 3</h3>
    // </div>
    // );

// Creating functional components of above JSX
const Container = (prop) => (
    <div className='inner' style={{fontSize: prop.size}}>JSX Covered</div>
);


const Title = (props) => (
    <div id={props.id} className='title' style={{border: props.border, padding: props.padding, textAlign:"center"}}>
    <Container size="2rem"/>
    <h1>Create react elements using JSX</h1>
    <h2>Re-created the same element using functional components</h2>
    <h3>Created the compositional componets and also used props</h3>
    </div>);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Title id="mytite" border="1px solid gray" padding="1rem"/>)