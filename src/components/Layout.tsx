import Sidebar from '../components/Sidebar'
import Test from '../pages/Test'

export default function Layout() {
    return (
        <div className='grid grid-cols-8'>
            <div className='col-span-1'>
                <Sidebar />
            </div>
            <div className='col-span-7'>
                <Test />
            </div>
        </div>
    )
}