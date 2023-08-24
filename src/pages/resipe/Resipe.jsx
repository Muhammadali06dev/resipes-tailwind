import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function Resipe() {
   const { id } = useParams()
   const { data, error, isPending } = useFetch(`http://localhost:3000/resipes/${id}`)
   console.log(data)
   return (
      <div className='container lg mx-auto my-10 flex gap-10'>
         {isPending && <h3 className='text-center font-bold'>Loading...</h3>}
         {error && <h3 className='text-center font-bold'>Not Found</h3>}
         {data && <> <img className='object-cover ' src={data.image} alt="" width={250} />
            <div className='resipe__info '>
               <h2 className='resipe__title font-bold text-3xl'>{data.title}</h2>
               <h5 className='resipe__time mb-5' ><b>Time: </b>{data.cookingTime}</h5>
               <ol className='resipe__ingredients border-e-2 border-b-2 mr-10 float-left pr-5 pb-5 mb-10'>
                  <b>Ingredients:</b>
                  {data.ingredients.map((item) => {
                     return (
                        <li>{item}</li>
                     )
                  })}
               </ol>
               <div className='redipe__method max-w-3xl'>
                  <b>Method: </b>
                  <br />
                  {data.method}
               </div>
            </div></>}
      </div>
   )
}

export default Resipe