import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from  '@apollo/react-hooks';
import './Deals.css';
import { Link } from 'react-router-dom';


const ProdList  = gql`
{
    allProducts{
      id
      name
      price
      description
      image
      }
    }
`



function Deals() {

    const {loading, error, data}  = useQuery(ProdList)
    if (loading) return <h4>Loading</h4>

    if(error) return <h4>{error}</h4>
    
    return (
        <div className="prod_container">
            <div className="prod_titles">
            <h4>Deals of the Day</h4>
            <Link to="#" className="prod_link">See All</Link>
            </div>
            <div className="card_sideways"> 
                   {data.allProducts.slice(0,4).map((prod)=> <div key={prod.id} className='prod_card'>
                       <img src={String("http://localhost:8000/"+prod.image)} alt=""></img>
                       <p className='prod_name'>{prod.name}</p>
                       <p className='prod_rating'> ****</p>
                       <p className='prod_price'>KES {prod.price}</p>
                    
                       <button>Add to Cart</button>
                   </div> )} 
            </div>
        </div>
    )
}

export default Deals;
