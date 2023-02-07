const Shimmer = () =>{
  return(
   <>
    <div className="shimmer-container">
      {Array(20).fill("").map((e,index) => (
         <div key={index} className="shimmer"></div>
      ))}
    </div>
   </>
  )
}

export default Shimmer;