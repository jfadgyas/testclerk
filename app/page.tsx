import Link from 'next/link'

const page = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link href='test'>TEST</Link>    
            <Link href='test2'>TEST 2</Link>    
            <Link href='/test2/test3'>TEST 3</Link>    
        </div>
    )
}

export default page