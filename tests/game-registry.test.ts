import { describe, expect, it, vi } from 'vitest'
import { GameRegistry } from '../src/core/game-registry'
import type { ArcadeGame } from '../src/core/game'

function game(overrides: Partial<ArcadeGame> = {}): ArcadeGame {
  return {
    id: 'juego-prueba',
    title: 'Juego de prueba',
    summary: 'Un juego aislado para verificar el contrato.',
    minimumPlayers: 1,
    estimatedMinutes: 3,
    status: 'prototype',
    mount: vi.fn(),
    ...overrides
  }
}

describe('GameRegistry', () => {
  it('registra y recupera un juego válido', () => {
    const registry = new GameRegistry()
    const candidate = game()
    registry.register(candidate)
    expect(registry.get(candidate.id)).toBe(candidate)
  })

  it('rechaza ids duplicados', () => {
    const registry = new GameRegistry()
    registry.register(game())
    expect(() => registry.register(game())).toThrow('ya está registrado')
  })

  it('rechaza contratos inválidos', () => {
    const registry = new GameRegistry()
    expect(() => registry.register(game({ id: 'Juego con espacios' }))).toThrow('kebab-case')
  })
})
