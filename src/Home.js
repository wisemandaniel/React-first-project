import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', { signal: abortCont.signal })
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
                if(err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
                 
            });
        }, 3000)
        return () => abortCont.abort(); 
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