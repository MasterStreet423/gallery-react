import "../styles/Imgplace.css"
export const Imgplace = ({image,title}:{image:string,title:string}) => {
  return (
    <a className='imageContainer'>
      <img title={title} src={image} className="image" alt="" />
    </a>
  )
}
