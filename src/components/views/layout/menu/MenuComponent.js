import React from 'react';
import MenuView from './MenuView';

import {
    HomeOutlined,
    CalendarOutlined,
    CommentOutlined ,
   
  } from '@ant-design/icons';

class MenuComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            menuItems : [
                {
                    name:'Inicio',
                    icon: <HomeOutlined/>

                },
                {
                    name:'Turnos',
                    icon: <CalendarOutlined />
                },
                {
                    name:'Contacto',
                    icon:<CommentOutlined />
                }
            ]

        }
    }


    render(){
        return(
                <MenuView items={this.state.menuItems}  />
        )
    }

}

export default MenuComponent;