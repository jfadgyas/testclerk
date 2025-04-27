import Link from 'next/link'

const TestPage = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <Link href={'/test2?p=555'}>TEST 2 with params</Link>
            <Link href={'/test2/test3'}>TEST 3</Link>
            <br/>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default TestPage