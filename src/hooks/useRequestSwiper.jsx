import { useState, useEffect } from 'react';
import axios from 'axios';



function useRequestSwiper (url) {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function makeRequest() {
          try {
              const response = await axios.get(url);
              setApiData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        makeRequest();
      }, [url]);

      return apiData;
}



export default useRequestSwiper;