import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from '../../components/Hero'

describe('Hero', () => {
  describe('should have the correct structure', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      )
    })

    test('should show a heading, a cta button and a hero image', () => {
      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeInTheDocument()
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })
})
