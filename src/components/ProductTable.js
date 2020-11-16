import React from 'react'
import {Nav} from 'react-bootstrap'
import {VscDashboard} from 'react-icons/vsc'
import {HiShoppingCart} from 'react-icons/hi'
import {SiGoogleanalytics} from 'react-icons/si'
import {FcSalesPerformance} from 'react-icons/fc'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {VscReport} from 'react-icons/vsc'
import {AiFillSetting} from 'react-icons/ai'

function ProductTable() {


    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        
            <Nav.Link href="/home">
               <VscDashboard  size={30} style={{ fill: 'black' }}/> 
                Dashboard
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-1"><HiShoppingCart/> Shop</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-2"><SiGoogleanalytics /> Product Analysis</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-3"><FcSalesPerformance /> Sales Marketing</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
            <Nav.Link eventKey="link-4"><FaRegMoneyBillAlt /> Financial Management</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
            <Nav.Link eventKey="link-5"><VscReport /> Reports</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
            <Nav.Link eventKey="link-6"><AiFillSetting /> Configurations</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default ProductTable
