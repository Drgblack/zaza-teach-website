"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function HomePage() {
  const [count, setCount] = useState(0);

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
  );
} 