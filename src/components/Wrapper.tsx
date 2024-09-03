function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="size-full mx-auto max-w-7xl p-2">
        {children}
      </div>
    </div>
  )
}

export default Wrapper