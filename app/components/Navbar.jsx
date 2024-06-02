import Link from 'next/link'
import Image from 'next/image'
import Logo from './one.jpg'

export default function navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Kaz pic'
        width={70}
        height={40}
        quality={100}
        placeholder='blur'
      />
          <h1>Switch</h1>
          <Link href="/">Mainboard</Link>
          <Link href="/news"> Main News</Link>
    </nav>
  )
}
