import { connection } from 'next/server'

const CurrentDate = async () => {
  await connection()
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return <span>{today}</span>
}

export default CurrentDate
