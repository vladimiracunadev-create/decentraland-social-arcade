import type { ArcadeGame } from './game'
import { validateGame } from './game'

export class GameRegistry {
  private readonly games = new Map<string, ArcadeGame>()

  register(game: ArcadeGame): void {
    const problems = validateGame(game)
    if (problems.length > 0) throw new Error(problems.join(' '))
    if (this.games.has(game.id)) throw new Error(`El juego ${game.id} ya está registrado.`)
    this.games.set(game.id, game)
  }

  get(id: string): ArcadeGame | undefined {
    return this.games.get(id)
  }

  list(): readonly ArcadeGame[] {
    return [...this.games.values()]
  }
}
