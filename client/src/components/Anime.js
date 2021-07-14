import React,{useEffect,useState} from 'react';

export const Anime =()=>{

    
    const [image,setImage]=useState("#");
    const [description,setDescription]=useState("Description");
    const [query,setQuery]=useState("");
    const [anime,setAnime]=useState("Nothing lies here");

    const submitHandler=(e)=>{
        e.preventDefault();
        fetch("/anime", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(query)
            }
        ).then(response => {
    
        return response.json()
      })
      .then(json => {
    
      setAnime(json.data.Media.title.native);
      setDescription(json.data.Media.description);
      setImage(json.data.Media.coverImage.medium);
      })
    }

    // useEffect(()=>{
    //     fetch('/anime').then(res=>res.json()).then(data=>{
    //         setAnime(data.data.Media.title.english);
    //     })
    // },[]);
    console.log(anime)
    return(
        <div className="container">
             
            <div className="form-group text-center ">
           <div className="form-group">
            <input className="form-control form-control-lg"onChange={(e)=>setQuery(e.target.value)}></input>
            </div>
            <button className="btn btn-primary btn-lg"onClick={submitHandler}>Submit</button>
            </div>

            <div className="card p-4 text-center shadow-lg border-0 ">
            <img className="img-fluid rounded"src={image} alt="No Image"></img>
            <div className="content">
            <p className="content-title font-size-24">This  is {anime}</p>
            <p className="text-muted font-size-20">{description}</p>
            </div>
            </div>

        </div>
    )

    
}