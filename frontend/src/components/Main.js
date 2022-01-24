import React from 'react'
import './Main.css'
import { gql } from 'apollo-boost';
import { useQuery } from  '@apollo/react-hooks';
import './Deals.css';

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

function Main() {

    const {loading, error, data}  = useQuery(ProdList)
    if (loading) return <h4>Loading</h4>

    if(error) return <h4>{error}</h4>
    return (
        <div className='Main_Container'>
            <h4> You May Also Like</h4>
            <div className='Main_Grid'>
            {data.allProducts.map((prod)=> <div key={prod.id} className='prod_card'>
                       <img src={String("http://localhost:8000/"+prod.image)} alt=""></img>
                       <p className='prod_name'>{prod.name}</p>
                       <p className='prod_rating'> ****</p>
                       <p className='prod_price'>KES {prod.price}</p>
                    
                       <button>Add to Cart</button>
                   </div> )} 

            </div>
            
            <button>LOAD MORE</button>
        </div>
    )
}

export default Main;
