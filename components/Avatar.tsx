
import Image from 'next/image'

export default  function Avatar() {
  return (
      <Image src={"/logo.png"} height={30 } width={30} alt='logo' className='bg-red-600'></Image>
  )
}

