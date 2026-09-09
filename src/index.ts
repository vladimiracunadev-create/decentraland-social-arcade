import { GameRegistry } from './core/game-registry'
import { pulsoCooperativo } from './games/pulso-cooperativo'
import { createPlaza } from './scene/create-plaza'

export function main(): void {
  createPlaza()

  const registry = new GameRegistry()
  registry.register(pulsoCooperativo)

  // En la etapa inicial se monta un único juego. El registro permite añadir otros
  // sin convertir la primera entrega en un catálogo incompleto.
  registry.get('pulso-cooperativo')?.mount()
}
