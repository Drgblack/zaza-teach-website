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

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4">
      <Card className="w-full max-w-xl shadow-2xl border-none bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Welcome to Zaza Teach
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-lg">
            AI tools to help teachers plan faster, communicate better, and thrive.
          </p>
          <Button className="text-white bg-purple-600 hover:bg-purple-700">
            Explore Zaza Teach
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
