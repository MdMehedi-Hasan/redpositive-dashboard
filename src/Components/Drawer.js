import React from 'react';
import Table from './Table';

const Drawer = () => {
    return (
        <div className="drawer drawer-mobile gap-5">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <Table/>
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-gray-200 text-base-content gap-5">
                    {/* <!-- Sidebar content here --> */}
                    <li><a href='/'>Sidebar Item 1</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                    <li><a href='/'>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Drawer;