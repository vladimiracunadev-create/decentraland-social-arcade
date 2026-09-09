import {
  engine,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  pointerEventsSystem,
  Transform
} from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
import type { ArcadeGame } from '../../core/game'

const inactive = Color4.create(0.22, 0.15, 0.42, 1)
const active = Color4.create(0.1, 0.85, 0.65, 1)

function createBeacon(position: Vector3, label: string): void {
  const beacon = engine.addEntity()
  Transform.create(beacon, { position, scale: Vector3.create(1.4, 1.4, 1.4) })
  MeshRenderer.setCylinder(beacon)
  MeshCollider.setCylinder(beacon)
  Material.setPbrMaterial(beacon, { albedoColor: inactive, emissiveColor: inactive })

  let enabled = false
  pointerEventsSystem.onPointerDown(
    { entity: beacon, opts: { button: InputAction.IA_POINTER, hoverText: `Activar ${label}` } },
    () => {
      enabled = !enabled
      const color = enabled ? active : inactive
      Material.setPbrMaterial(beacon, { albedoColor: color, emissiveColor: color })
    }
  )
}

export const pulsoCooperativo: ArcadeGame = {
  id: 'pulso-cooperativo',
  title: 'Pulso cooperativo',
  summary: 'Activa los tres faros y descubre el ritmo básico del futuro desafío social.',
  minimumPlayers: 1,
  estimatedMinutes: 3,
  status: 'prototype',
  mount() {
    createBeacon(Vector3.create(5, 1, 9), 'faro violeta')
    createBeacon(Vector3.create(8, 1, 11), 'faro central')
    createBeacon(Vector3.create(11, 1, 9), 'faro verde')
  }
}
