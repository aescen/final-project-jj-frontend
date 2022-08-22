import Sidebar from "../sidebar/Sidebar"
const Layout = ({ children }) => {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Sidebar />
                </div>
                <div className='col-10'>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout