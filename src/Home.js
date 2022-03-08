import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
       }, 2000)
    }, [blogs])

    return ( 
        <div className="home">
              {error && <p>{error}</p>}
              {isPending && <div>loading...</div>}
              {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;