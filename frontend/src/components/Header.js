import React, { useState } from 'react'
import logo from './images/logo-white.png'
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

import { gql } from 'apollo-boost'
import { useQuery } from  '@apollo/react-hooks';
import {useNavigate} from 'react-router-dom'

const SEARCH_QUERY = gql`
    query allSearch($name: String!){

            allSearch(name: $name) {
              id
              name
              price
              image
              
            }

    }
`








function Header() {
    
    

   

    const [search, setSearch] = useState("")
    const  {data} = useQuery(SEARCH_QUERY,{
        variables: {name:  search},
    })
    let navigate = useNavigate()

    function submit(e){
        
        const term = encodeURI(search)
        console.log(data)
        e.preventDefault()
        navigate(`/search?=${term}`, {state: data})
    }

    return (
        <div className="header">
            <div className="header__one">
               <Link to="/"> <img className="header__logo" src={logo} alt=""></img></Link>
                    <form className="search" onSubmit={submit}>
                        <input className="header__search" 
                        type="text" placeholder="Search"
                        onChange={(e)=>{setSearch(e.target.value)}}></input>
                        <button className="search_icon" onClick={submit}> <SearchIcon /></button>
                    </form>
                    
                    
                
                <div className="left_menu">
                    <div className="cart">
                        <ShoppingCartOutlinedIcon className="" />
                        <Link to="/cart" className="cart_name">Cart</Link>
                        <span>2</span>
                    </div>
                    <div className="account">
                        <PermIdentityOutlinedIcon className="account_icon" />
                        <Link to="/login" className="account_name">Login</Link>
                    </div>
                </div>
            </div>
            <div className="header__two">
                <div className="categories">
                        <MenuIcon className="burger__menu" />
                        <span>Categories</span>
                        <KeyboardArrowDownIcon className="down_menu" />

                        
                </div>
                
                <div className="top__searches">
                       <span> Top Searches: </span>
                        <Link className="link" to="#">bags</Link>
                        <Link className="link" to="#">shirts</Link>
                        <Link className="link" to="#">watches</Link>
                        <Link className="link" to="#">shirts</Link>
                        <Link className="link" to="#">shoes</Link>
                </div>
                <div className="addresses">
                   <span> Ship To: Nairobi </span>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
