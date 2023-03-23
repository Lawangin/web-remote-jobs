'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Category from './components/category'
import TopBar from './components/TopBar'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    async function fetchDashboard() {
      const response = await fetch('http://localhost:3000/api/data')
      const data = await response.json()
      setDashboard(data)
      setLoading(false)
    }

    fetchDashboard()
  }, [])

  return (
    <>
      <TopBar />
      <Category />
    </>
  )
}
