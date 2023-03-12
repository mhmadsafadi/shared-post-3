import React from 'react'
import logo from '../../public/logo.svg'
import {Link} from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';


export const Navbar = () => {

  return (
    <navbar>
        <Link to='/'>
            <img src={logo} alt="Logo" width={50} />
        </Link>
        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} style={{ width: 400 }}/>

        <div className='user-nav-menu'>
            <span>Heba</span>
            <UserOutlined />
        </div>
    </navbar>
  )
}

export default Navbar
// const userData=localStorage.getItem('data');
// const testUserData =JSON.parse(userData);
// const name =testUserData.name;
// console.log("name");
// console.log("data");