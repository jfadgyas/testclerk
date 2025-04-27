import Link from 'next/link'

const Test2Page = () => {
    return (
        <div>
            <h1>Test Page 2</h1>
            <Link href={'/test'}>TEST</Link>
            <Link href={'/test2/test3'}>TEST 3</Link>
            <br/>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Test2Page