import { useEffect, useState } from 'react'
import {getImages} from "./getData"
import { imgData } from "./interfaces/imgData"
import { Imgplace } from './components/Imgplace'
import FilterPhoto from './components/FilterPhoto'
import {ImagePreview} from "./components/ImagePreview"

export const App = () => {
    let firstTime = true
    const [listImages,setListImages]:[imgData[],any] = useState([])
		useEffect(() => 
		{
				if(firstTime){
						getImages(false).then(
								(data:imgData[]) => {
										setListImages(data)
								}
							)
							firstTime = false 
				}
				
				
			 
		},[])
			
		useEffect(() => {
			document.querySelectorAll(".imageContainer").forEach(e=>{
					 
					e.addEventListener("click",()=>{
						 const preview = document.getElementById("imagePreviewContainer")?.querySelector("#imagePreview") as HTMLImageElement
						 const recurso = e.querySelector(".image")?.getAttribute("src")



						 if (preview != undefined && recurso != undefined){
								
							 preview.setAttribute("src",recurso)
							 if (preview.parentNode instanceof HTMLDivElement){
									preview.parentNode.style.display = "block"
									const title = preview.parentNode.querySelector("#previewTitle")
									if (title instanceof HTMLHeadingElement){
										title.textContent = e.querySelector(".image")?.getAttribute("title") || "noname"
									}

							 }
							 						 	

						 }
						
						 
					})
				})
		},[listImages])

  return (
    <main id='app'>
        <h1 id='titleMain'>Hello World</h1>
        <FilterPhoto/>
				 <ImagePreview image=""/>
        <article id='containerImages'>
					 {listImages.map((e,i)=>{

							return <Imgplace title={e.name} key={i} 
                image={e.download_url}/>
            })}
        </article>
    </main>
  )
}
