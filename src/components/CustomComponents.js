function CustomComponent(props){
    return(
        <div className='show center'>
            <div className=''
            ><img className='profile' src={props.profile}></img>
     <p className='title'> <h2 className='title'>{props.name}</h2>
    <br/>
      {props.time}<br/></p>
      <br/>
      
      <p>{props.text}</p>
      
       
     <img className='post' src={props.post}></img>
     <p><br/><br/></p>
    </div></div>
     
    )
   
}

export default CustomComponent