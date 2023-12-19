

let url = 'https://api.github.com/repos/MasterStreet423/images-to-gallery/contents/images';

const token =  import.meta.env.VITE_TOKEN_API ?? console.log("Error");
;
export const getImages= async (is_test:boolean) => {
	 
	 if (is_test){
			url = "https://picsum.photos/v2/list?limit=20";
			const response = await fetch(url);
			const data = await response.json();
			return data
	 }else
			{ 
				 const response = await fetch(url,{
						method: 'GET',
						headers: {
							 'Authorization': `Bearer ${token}`
						}
				 });
				 const data = await response.json();
				 return data;
			}}
