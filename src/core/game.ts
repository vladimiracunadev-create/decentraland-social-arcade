export type GameStatus = 'prototype' | 'playable' | 'paused'

export interface ArcadeGame {
  readonly id: string
  readonly title: string
  readonly summary: string
  readonly minimumPlayers: number
  readonly estimatedMinutes: number
  readonly status: GameStatus
  mount(): void
}

export function validateGame(game: ArcadeGame): string[] {
  const problems: string[] = []
  if (!/^[a-z0-9-]+$/.test(game.id)) problems.push('El id debe usar kebab-case.')
  if (game.title.trim().length < 3) problems.push('El título es demasiado corto.')
  if (game.minimumPlayers < 1) problems.push('Debe admitir al menos una persona.')
  if (game.estimatedMinutes < 1) problems.push('La duración debe ser positiva.')
  return problems
}
