'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Zaza Teach</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the homepage of your site. Edit <code>app/page.tsx</code> to get started.</p>
          <Button className="mt-4">Explore</Button>
        </CardContent>
      </Card>
    </main>
  )
}
