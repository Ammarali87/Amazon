


export const useGetProdcutQuery  = ()=>{  
	useQuery ({ 
		 queryKey :["producs"] , 
		queryFu : async () => (await apiClient.get<Prodcut[]>("api/prodcuts/")).data
		} )}

		export const useGetProdcutDetailssBySlugQuery = (slug:string)=>{
	useQuery({
		queryKey :["producs",slug] , 
		queryFu : async () => (
			await apiClient.get<Prodcut>("api/prodcuts/"+slug)).data
	})
 }	