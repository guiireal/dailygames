import { Container } from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Game as GameType } from "@/types";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/Label";

type GameProps = {
  params: Promise<{ id: string }>;
};

async function getData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { cache: "no-store" }
    );

    return response.json();
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

async function getGameSorted() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );

    return response.json();
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export default async function Game({ params }: GameProps) {
  const { id } = await params;

  const [data, sortedGame] = await Promise.all<GameType>([
    getData(id),
    getGameSorted(),
  ]);

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-75"
          src={data.image_url}
          alt={data.title}
          priority
          fill
          quality="100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>

        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((platform) => (
            <Label key={platform} name={platform} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>

        <div className="flex gap-2 flex-wrap">
          {data.categories.map((category) => (
            <Label key={category} name={category} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento:</strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>

        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
