


export const useGetProdcutQuery  = ()=>{  
	useQuery ({ 
		 queryKey :["producs"] , 
		qreryFu : async () => (await apiClient.get<Prodcut[]>("api/prodcuts").data)
		} )}