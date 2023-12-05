import { useEffect } from "react";


function FetchProducts(url, setResponse){

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setResponse(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url, setResponse]);

}

export default FetchProducts;