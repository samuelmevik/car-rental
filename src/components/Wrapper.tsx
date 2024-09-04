function Wrapper({ children }: { children: React.ReactNode }) {
  return (

    <div className="size-full mx-auto max-w-7xl px-12 grid gap-12">
      {children}
    </div>

  )
}

export default Wrapper