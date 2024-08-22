import React,{ useState,useEffect } from "react";
import axios from "axios";
import './quotes.css'
const Quote=()=>{
    const [quote,setQuote]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchQuote=async()=>{
            try {
                setLoading(true);
                const response=await axios.get('https://api.quotable.io/random');
                setQuote(response.data);

            } catch(err){
                setError('Train yourself to let go of everything you fear to lose.” — Yoda.')
            } finally{
                setLoading(false)
            }
        }
        fetchQuote();
    },[])
    return (
        <div className="quotes-section">
         
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {quote && (
            <div className="quote">
              <p className="text">"{quote.content}"</p>
              <p className="author">- {quote.author}</p>
            </div>
          )}
        </div>
      );
}
export default Quote