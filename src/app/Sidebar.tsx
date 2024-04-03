import React from 'react'
import Link from '../../node_modules/next/link';

//import { useRouter } from 'next/router';
const Sidebar = (props) => {
    //const router = useRouter();
    //  console.log(props); 
    return (
        <nav className="h-full py-4">
            {props.menu.map((menu, i) => (
                <Link key={i}
                    href={menu.url}
                   // className={router.pathname ===  menu.url  ? 'active' : ''} 
                   className="text-sm p-2 font-medium transition-colors hover:text-primary block"
                   >
                { menu.label }
                </Link>
    ))}
        </nav>
    )
}
// text-sm p-2 font-medium transition-colors hover:text-primary block
export default Sidebar
