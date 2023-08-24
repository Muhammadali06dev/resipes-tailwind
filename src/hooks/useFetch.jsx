import { useState, useEffect } from "react";

export function useFetch(url) {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false)

   useEffect(() => {
      const fetchData = async () => {
         setIsPending(true)
         try {
            const req = await fetch(url)
            if (!req.ok) {
               throw new Error(req.statusText)
            }
            const data = await req.json()
            setData(data)
            setIsPending(false)
         }

         catch (err) {
            setError(err.message)
            setIsPending(false)
            console.log(err.message)
         }
      }

      fetchData()
   }, [url])

   return { data, error, isPending }
}