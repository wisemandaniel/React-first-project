import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Damiel');
    const handleClick = () => {
        setName('NDZO');
    } 
    return ( 
        <div className="home">
           <h2>Home component</h2> 
           <p>{name}</p>
           <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;