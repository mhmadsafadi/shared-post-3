import React from 'react'
import logo from '../assets/logo.svg'
import User from '../assets/user.svg'
import {Link} from 'react-router-dom'
import { Input, Row } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';


const Navbar = () => {

  return (
    <Row justify="space-between" className='hold-nav'>
        <Link to='/'>
            <img src={logo} alt="Logo" width={50} />
        </Link>
        
        <Search placeholder="Search" className='search-input' enterButton />

        <div className='user-nav-menu'>
            <span>John Smith</span>
            <figure className='user-img'>
              <img src={User} />
            </figure>
        </div>
    </Row>
  )
}

export default Navbar
