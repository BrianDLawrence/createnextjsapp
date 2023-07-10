import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <h1>Hello World!</h1>
       <button className="btn btn-primary">Button</button>
      </div>
    </main>
  )
}
