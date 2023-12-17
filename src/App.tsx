import { useEffect, useState } from 'react'
import { ImgData } from './interfaces/imgData'
import {getImages} from "./getData"
import { Imgplace } from './components/Imgplace'
import FilterPhoto from './components/FilterPhoto'

export const App = () => {
    let firstTime = true
    const [listImages,setListImages]:[string[],any] = useState([])
    useEffect(() => 
    {
        if(firstTime){
            getImages().then(
                (data:string[]) => {
                    setListImages(data)
                    console.log(data)
                }
              )
              firstTime = false 
        }
       
    },[])
  return (
    <main id='app'>
        <h1 id='titleMain'>Hello World</h1>
        <FilterPhoto/>
        <article id='containerImages'>
          {listImages.map((e,i)=>{
                return <Imgplace key={i} 
                image={"https://template-nodejs-dev-nzct.3.us-1.fl0.io/image/"+e}/>
            })}
        </article>
    </main>
  )
}
