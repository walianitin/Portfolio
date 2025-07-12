
import { Link, Avatar as Picture } from '@radix-ui/themes'

export default  function Avatar() {
  return (
    <Link href='https://x.com/intent/follow?screen_name=walia_niti37420' target='_blank'>
      <Picture
        src='/dog.jpeg'
        fallback="Nitin Walia"
        size='6'
        radius='full'
      />
    </Link>
  )
}

