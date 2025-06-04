import { LinkedinJobOptimizer } from './components/LinkedinJobOptimizer'
import { Toaster } from 'sonner'
import { HomePage } from './pages/HomePage'

export default function Home() {
  return (
    <>
      {/* <LinkedinJobOptimizer /> */}
      <HomePage />
      <Toaster />
    </>
  )
}
