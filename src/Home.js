const Home = () => {
    const handleClick = () => {
       console.log("Hello, ninjas");
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return ( 
        <div className="home">
           <h2>Home component</h2> 
           <button onClick={handleClick('DANIEL')}>Click me</button>   
           <br /><br />
           <button onClick={(e) => handleClickAgain('DANIEL', e)}>Click me</button> 
        </div>
     );
}
 
export default Home;