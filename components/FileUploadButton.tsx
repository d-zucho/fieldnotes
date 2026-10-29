'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UploadIcon } from 'lucide-react'

export function FileUpload() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <div className='relative'>
      <Input
        ref={inputRef}
        type='file'
        className='hidden'
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
      <Button
        type='button'
        variant='outline'
        onClick={() => inputRef.current?.click()}
        className='min-w-32 shadow-sm transition-all hover:shadow-md'
      >
        <UploadIcon className='size-4' />
        Import source
      </Button>
      {/* absolutely positioned so it never affects the button's alignment */}
      <span className='absolute left-0 top-full mt-1 text-sm text-muted-foreground'>
        {fileName && 'Success!'}
      </span>
    </div>
  )
}
