
import { useEffect, useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/comments"

export function useGetData() {

  const [review, setReview] = useState([])

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(response => { setReview(response) })
  }, [url])

  return [review]
}