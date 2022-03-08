const Home = () => {
    const handleClick = () => {
       console.log("Hello, ninjas");
    }
    return ( 
        <div className="home">
           <h2>Home component</h2> 
           <button onClick={handleClick}>Click me</button>   
        </div>
     );
}
 
export default Home;