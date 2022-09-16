import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'

const Navbar = ({ user }) => {
    const router = useRouter()

    return (
        <div className='bg-white shadow mb-10'>
            <div className='container mx-auto py-5'>
                <NavLink href="about-me">About me</NavLink>
                <NavLink href="contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar