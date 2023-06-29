import Image from 'next/image'
import StyledInput from './components/StyledInput'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
      <StyledInput startIcon='phone' endIcon='phone' />
      <StyledInput startIcon='phone' endIcon='phone' fullWidth />
    </main>
  )
}
