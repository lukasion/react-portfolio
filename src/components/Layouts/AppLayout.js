import { useAuth } from '@/hooks/auth'
import Navbar from '@/components/Layouts/Navbar'

const AppLayout = ({ header, children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar></Navbar>

            {/* Page Heading */}
            <header className="bg-white">
                <div className="container mx-auto py-6">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
