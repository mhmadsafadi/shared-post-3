import React from 'react'
import logo from '../../public/logo.svg'
import {Link} from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';


const Navbar = () => {
  return (
    <navbar>
        <Link to='/'>
            <img src={logo} alt="Logo" width={50} />
        </Link>
        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} style={{ width: 400 }}/>

        <div className='user-nav-menu'>
            <span>User Name</span>
            <UserOutlined />
        </div>
    </navbar>
  )
}

export default Navbar