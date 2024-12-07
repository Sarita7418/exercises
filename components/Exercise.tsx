import Image, { StaticImageData } from "next/image";
import flecha from "@/public/Icons.svg";
import "./Exercise.css";

interface ExerciseProps {
  titulo: string;
  imagen: StaticImageData;
}

const Exercise: React.FC<ExerciseProps> = ({ titulo, imagen }) => {
  return (
    <div className="card">
      <Image src={imagen} alt={titulo} />
      <div className="text">
        <h2>{titulo}</h2>
        <span>3 séries x 12 repetições</span>
      </div>
      <img src={flecha.src} alt="" />
    </div>
  );
};

export default Exercise;
