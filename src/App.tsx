import { Button } from "./components/ui/button";

export function App() {

  return (
    <main className="flex h-screen gap-2 w-full items-center justify-center">
      <h1 className="font-semibold text-2xl text-zinc-700">Master Notes</h1>
      <Button size="sm" variant="secondary">Click me</Button>
      <Button size='lg' variant='destructive'>Click me</Button>
      <Button variant='ghost'>Click me</Button>
    </main>
  )
}


