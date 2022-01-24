import React from 'react';
import './Categories.css';
import { gql } from 'apollo-boost';
import { useQuery } from  '@apollo/react-hooks';

const categories = gql`
{
    allCategories{
        id
        name
        img
    }
}
`




function Categories() {
    const {loading, error, data } = useQuery(categories)

    if(data){
        console.log(data.allCategories.img)
    }

    if (loading) return <h4>Loading ...</h4>
    if(error) return <h4>{error}</h4>
    return (
        <div className='Categories'>
            <h4>Browse by Categories</h4>
            <div className='Category'>
                {data.allCategories.map((cat)=><div key ={cat.id} className='Cat_Card'>
                    <img src={String("http://localhost:8000/images/"+cat.img)} alt=""></img>
                    <p>{cat.name}</p>
                    </div>)}
            </div> 
        </div>
    )
}

export default Categories;
