import Link from 'next/link'

const Test3 = () => {
    return (
        <div>
            <h1>Test Page 3</h1>
            <Link href={'/test'}>TEST</Link>
            <Link href={'/test2'}>TEST 2</Link>
            <br/>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Test3