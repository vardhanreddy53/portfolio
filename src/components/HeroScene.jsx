import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 4] }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 1]} />
      <Sphere visible args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default HeroScene;
