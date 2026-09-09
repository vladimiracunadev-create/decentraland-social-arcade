import { engine, Material, MeshCollider, MeshRenderer, Transform } from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'

export function createPlaza(): void {
  const floor = engine.addEntity()
  Transform.create(floor, {
    position: Vector3.create(8, -0.1, 8),
    scale: Vector3.create(16, 0.2, 16)
  })
  MeshRenderer.setBox(floor)
  MeshCollider.setBox(floor)
  Material.setPbrMaterial(floor, {
    albedoColor: Color4.create(0.06, 0.07, 0.13, 1),
    metallic: 0.15,
    roughness: 0.8
  })
}
