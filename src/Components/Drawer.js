import { Icon } from '@iconify/react';
import React from 'react';
import Table from './Table';

const Drawer = () => {
    return (
        <div className="drawer drawer-mobile gap-5">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <Table/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-gray-200 text-base-content gap-5">
                <div className='flex items-center text-2xl font-bold border-b border-slate-400'><span className='pl-3 pr-3'><Icon icon="ion:logo-electron" /></span><span>Red Positive</span></div>
                    {/* <!-- Sidebar content here --> */}
                    <li><a href='/'><span><Icon icon="ic:baseline-space-dashboard" /></span> Dashboard</a></li>
                    <li><a href='/'><span><Icon icon="fa6-solid:people-group" /></span> Total traffic</a></li>
                    <li><a href='/'><span className='text-xl'><Icon icon="dashicons:money-alt" /></span> Sales generated</a></li>
                    <li><a href='/'><span className='text-xl'><Icon icon="ant-design:area-chart-outlined" /></span> Chart view</a></li>
                    <li><a href='/'><span className='text-xl'><Icon icon="healthicons:stock-out-outline" /></span> Total stock</a></li>
                    <li><a href='/'><span className='text-xl'><Icon icon="clarity:settings-line" /></span> Settings</a></li>
                </ul>

            </div >
        </div >
    );
};

export default Drawer;