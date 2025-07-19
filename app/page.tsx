'use client'

import { useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'

import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Zaza Teach</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is your homepage.</p>
          <Button onClick={() => setCount(count + 1)}>Click me ({count})</Button>
        </CardContent>
      </Card>
    </main>
  )
}
