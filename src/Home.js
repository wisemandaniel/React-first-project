import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })
       }, 2000)
    }, [blogs])

    return ( 
        <div className="home">
              {isPending && <h2>loading...</h2>}
              {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;