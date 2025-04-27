import Link from 'next/link'

import { auth, currentUser } from '@clerk/nextjs/server'

const Test3 = async () => {

    // check if there is a user
    // Although this route is not protected by middleware, should redirect if not signed in

    const user = await currentUser()

    if (!user) await auth.protect()

    return (
        <div>
            <h1>Test Page 3</h1>
            <h1>{user?.firstName}</h1>
            <Link href={'/test'}>TEST</Link>
            <Link href={'/test2'}>TEST 2</Link>
            <br/>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Test3