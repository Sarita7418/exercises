import Exercise from "@/components/Exercise";
import Header from "@/components/Header";
import img1 from "@/public/image.svg";
import img2 from "@/public/image (1).svg";
import img3 from "@/public/image (2).svg";
import img4 from "@/public/image (3).svg";

export default function Home() {
  const titles = ["Puxada Frontal", "Remada Curvada", "Remada unilateral", "Levantamento Terra"];
  const images = [img1, img2, img3, img4];

  return (
    <>
      <Header />
      {titles.map((title, index) => (
        <Exercise key={index} titulo={title} imagen={images[index]} />
      ))}
    </>
  );
}