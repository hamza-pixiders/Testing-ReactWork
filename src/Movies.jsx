import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';


function ncard(val)
{
    return(
<Cards
 key={val.id}
 imgsrc={val.imgsrc}
 title={val.title}
 $name={val.$name}
 link={val.link}
  />

    )
}



function Movies(){
    return(

<>

<h1 className='heading-style'>TOp 5 NetFlix Movies</h1>
<div className="contain">
{Sdata.map(ncard)}

  </div>
</>



    )
}

export default Movies;
