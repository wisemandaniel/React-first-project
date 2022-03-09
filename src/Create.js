import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
     const [title, setTitle] = useState('');
     const [body, setBody] = useState('');
     const [author, setAuthor] = useState('yoshi');
     const [isPending, setIsPending] = useState(false);
     const history = useHistory();

     const handleSubmit = (e) => {
          e.preventDefault();
          const blog = {title, body, author}
          setIsPending(true);

          setTimeout(() => {
               fetch('http://localhost:8000/blogs', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(blog)
               }).then(() => {
                    setIsPending(false);
                    console.log("New blog added");
                    // history.go(-1);
                    history.push('/');
               })
          }, 2000);
     } 
     
    return ( 
        <div className="create">
             <h2>Add a new Blog</h2>
             <form onSubmit={handleSubmit}>
                  <label>Blog title:</label>
                  <input 
                       type="text" 
                       required
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Blog content:</label>
                  <textarea
                       type="text"
                       required
                       value={body}
                       onChange = {(e) => setBody(e.target.value)}
                  >
                  </textarea>
                  <label>Blog author:</label>
                  <select
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}>
                       <option value="mario">Mario</option>
                       <option value="yoshi">Yoshi</option>
                  </select>
                  { !isPending && <button>Add blog</button>}
                  { isPending && <button disabled>Add blog...</button>}
             </form>
        </div>
     );
}
 
export default Create;