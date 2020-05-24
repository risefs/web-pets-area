import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function MenuView(props){
    const menus = props.items;
    const listMenu = menus.map( (menu,index) =>  <Menu.Item key={index} icon={menu.icon} >{menu.name}</Menu.Item>  );

    return(
              <Menu style={{ height: '100%', borderRight: 0 }}  defaultSelectedKeys={['1']} mode="inline">
               { listMenu } 
              </Menu>
    )
}

