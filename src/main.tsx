import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from './components/layout/ErrorBoundary'
import './styles/index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
      <Analytics />
    </ErrorBoundary>
  </React.StrictMode>
)
