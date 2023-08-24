import React from 'react'
import { Link } from 'react-router-dom'

function REsipeList({ data }) {
   console.log(data)
   return (
      <div className="container lg py-5 mx-auto flex gap-x-4 ">

         {data && data.map((recipe) => {
            return (
               <div className='max-w-xs w-full bg-white shadow-sm rounded-lg ' key={recipe.id}>
                  <img className='w-full  h-40 object-cover rounded-t-lg' src={recipe.image} alt="" />
                  <h3 className='font-bold my-3 text-xl px-3'>{recipe.title}</h3>
                  <p className='my-2 px-3'>Cooking Time: {recipe.cookingTime}</p>
                  <Link className='inline-block mx-3 my-2 px-4 py-2 bg-slate-600 text-white rounded-lg' to={`/${recipe.id}`}>Read more</Link>
               </div>
            )
         })}
      </div>
   )
}

export default REsipeList