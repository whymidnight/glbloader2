import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Ship = () => {
  const gltf = useLoader(GLTFLoader, "./ship.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

const Land = () => {
  const gltf = useLoader(GLTFLoader, "./land.glb");
  gltf.scene.position.setY(-5);
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Land />
          <Ship />
          <OrbitControls />
          <Environment preset="sunset"/>
        </Suspense>
      </Canvas>
    </div>
  );
}
