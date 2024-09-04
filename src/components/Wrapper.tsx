import { twMerge } from "tailwind-merge"

function Wrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("size-full mx-auto max-w-7xl px-12 grid gap-12", className)}>
      {children}
    </div>
  )
}

export default Wrapper