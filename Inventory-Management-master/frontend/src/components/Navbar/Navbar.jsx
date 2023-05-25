import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to={'/'} replace={true}>Inventory App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link to={'/'} replace={true} className="btn btn-primary">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Inventory
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end mt-3">
                                        <li> <Link to={'/item-groups'} replace={true} className="dropdown-item">Items Group</Link> </li>
                                        <li> <Link to={'/viewitems'} replace={true} className="dropdown-item">View Items</Link> </li>
                                        <li> <Link to={'/items'} replace={true} className="dropdown-item">Add Items</Link> </li>
                                        <li> <Link to={'/inventoryadjustments'} replace={true} className="dropdown-item">Inventory Adjustments</Link> </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item me-4">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sales
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end mt-3">
                                        <div className='d-md-flex'>
                                            <div>
                                                <li> <Link to={'/addcustomer'} replace={true} className="dropdown-item">Customers</Link> </li>
                                                <li> <Link to={'/sales'} replace={true} className="dropdown-item">Sales Orders</Link> </li>
                                                <li> <Link to={'/packages'} replace={true} className="dropdown-item">Packages</Link> </li>
                                                <li> <Link to={'/deliverychallans'} replace={true} className="dropdown-item">Delivery Challans</Link> </li>
                                            </div>
                                            <div>
                                                <li> <Link to={'/invoice'} replace={true} className="dropdown-item">Invoices</Link> </li>
                                                <li> <Link to={'/payments'} replace={true} className="dropdown-item">Payments Received</Link> </li>
                                                <li> <Link to={'/salesreturn'} replace={true} className="dropdown-item">Sales Returns</Link> </li>
                                                <li> <Link to={'/creditnotes'} replace={true} className="dropdown-item">Credit Notes</Link> </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Purchase
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end mt-3">
                                        <li> <Link to={'/vendors'} replace={true} className="dropdown-item">Vendors</Link> </li>
                                        <li> <Link to={'/purchaseorders'} replace={true} className="dropdown-item">Purchase Orders</Link> </li>
                                        <li> <Link to={'/billandpayments'} replace={true} className="dropdown-item">Bills and Payments</Link> </li>
                                        <li> <Link to={'/vendorscredit'} replace={true} className="dropdown-item">Vendor Credit</Link> </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar