import React from "react";

const page = ({params}) => {
  console.log(params)
  return (
    <>
     <h1>Blogs</h1>
    <div className="align-center-page">
      {params.id}
      </div>     
  
    </>

   
  )
  
};

export default page;
