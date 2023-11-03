'use client'
export default function ActionBtn() {
    return (
      <button onClick={()=> alert('Clcked Invite Button') } className='w-[10rem] py-2 grid place-content-center  bg-gradient-to-r from-lime-green to-cyan text-gray-100 rounded-full hover:scale-105'>Request Invite</button>
  )
}
