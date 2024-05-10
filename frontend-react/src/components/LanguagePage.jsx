import React from 'react'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useParams } from 'react-router-dom';

function LanguagePage(data) {
    const v=useParams()["l"]
    const lan=data.langData[v]
  return (
    <div className="container w-full flex flex-col">
<h1 className="text-center font-mono text-3xl font-bold mt-10">Available Content</h1>
<div className="mx-10">
<h1 className="font-mono text-xl font-bold mt-10">Videos</h1>
<div className="h-40 bg-blue-200 flex justify-start items-center overflow-auto">
{(Object.entries(lan.videos).map((obj,index)=>{
    return (<a key={index} href={obj[1]}><div className='ml-10 flex-shrink-0 w-30 overflow-hidden'>
    <OndemandVideoOutlinedIcon style={{"color":"red","fontSize":"100px","display":"block"}}/>
    {obj[0]}
    </div></a>)
}))}


</div>
</div>

<div className="mt-5 mx-10">
<h1 className="font-mono text-xl font-bold mt-10">Study Material</h1>
<div className="h-40 bg-blue-200 flex justify-start items-center overflow-auto">
{(Object.entries(lan.material).map((obj,index)=>{
    return (<a key={index} href={obj[1]}><div className='ml-10 flex-shrink-0 w-30 overflow-hidden'>
    <DescriptionOutlinedIcon style={{"color":"black","fontSize":"100px","display":"block"}}/>
    {obj[0]}
    </div></a>)
}))}
</div>
</div>
</div>
  )
}

export default LanguagePage