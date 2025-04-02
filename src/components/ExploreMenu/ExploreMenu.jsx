import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="Explore-menu" id="ExploreMenu">
        <h1>Explore our menu</h1>
        <p></p>
        <div className="Explore-menu-list">
            {menu_list.map((menu_list,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===menu_list.menu_name?"All":menu_list.menu_name)} key={index} className="Explore-menu-list-item">
                        <img className={category===menu_list.menu_name?"active":""} src={menu_list.menu_image} alt="" />
                        <p>{menu_list.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu