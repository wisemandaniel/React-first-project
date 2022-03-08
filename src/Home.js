const Home = () => {
    const handleClick = () => {
       console.log("Hello, ninjas");
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return ( 
        <div className="home">
           <h2>Home component</h2> 
           <button onClick={handleClick('DANIEL')}>Click me</button>   
           <br /><br />
           <button onClick={() => handleClickAgain('DANIEL')}>Click me</button> 
        </div>
     );
}
 
export default Home;