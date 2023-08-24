import "./Resipes.css"
import { useFetch } from "../../hooks/useFetch"
import REsipeList from "../../components/recipeList/REsipeList"

function Resipes() {
   const { data, error, isPending } = useFetch("http://localhost:3000/resipes")
   return (
      <>
         {isPending && <h3 className="text-center font-bold">Loading...</h3>}
         {error && <h3 className="text-center font-bold">Not Found</h3>}
         <REsipeList data={data} />
      </>
   )
}

export default Resipes