import { useState } from "react";

const Home = () => {
    const [name, setName] = useState({name: 'NDZO DANIEL', age: 22, height: '1.78m', IQ: 152});
    const handleClick = () => {
        setName({name: 'AKO BRONHILDA', age: 22, height: '1.78m', IQ: 152});
    } 
    return ( 
        <div className="home">
           <h2>Home component</h2> 
           <p>{name.name}</p>
           <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;