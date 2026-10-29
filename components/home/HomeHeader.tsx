import { Suspense } from 'react'
import CurrentDate from './CurrentDate'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { PlusIcon, UploadIcon } from 'lucide-react'
import { FileUpload } from '../FileUploadButton'

// @TODO: should i change the button height like figma file?
const HomeHeader = () => {
  return (
    <div>
      <div className='h-6'>
        <Suspense fallback={<span className='inline-block h-6 w-48' />}>
          <CurrentDate />
        </Suspense>
      </div>
      <div>
        {/* <h1 className='text-4xl md:text-5xl lg:text-6xl'>The Research Desk</h1> */}
        <h1 className='max-sm:mt-2 text-center sm:text-left text-heading-h1 font-serif font-semibold'>
          The Research Desk
        </h1>
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-between'>
          <p className='text-muted-foreground text-sm max-sm:text-center'>
            Good morning, Danny. <br /> Follow the evidence. Keep asking.
          </p>

          <div className='flex items-center gap-2'>
            <FileUpload />
            <Button className='min-w-32 py-4 border-0 relative shadow-sm transition-all hover:shadow-md duration-400'>
              <div className='absolute left-0 right-0 top-0 bottom-0 rounded-sm btn-shadow-light hover:shadow-none pointer-events-none' />
              {/* <div className='absolute left-0 right-0 top-0 bottom-0 rounded-sm inset-shadow-[inset_-8px_-8px_8px_0px_rgba(0,0,0,0.6)]' /> */}
              <PlusIcon className='size-4' />
              <div className='absolute left-0 right-0 top-0 bottom-0 rounded-sm btn-shadow-dark hover:shadow-none pointer-events-none' />
              New Case
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
