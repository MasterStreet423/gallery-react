import '../styles/ImagePreview.css'


export const ImagePreview = ({image}:{image:string})=>{
	 
	 image = 'https://picsum.photos/300/200'	 
	 return <div id="imagePreviewContainer">
			<button onClick={(e)=>{
			e.target.parentElement.style.display = "none"
			}} id="closeButton">X</button>
			<img id="imagePreview" src={image}></img>
			<h2 id="previewTitle"></h2>
	 </div>
} 
