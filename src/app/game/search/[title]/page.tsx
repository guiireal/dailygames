import { Container } from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/Input";
import { Game } from "@/types";

export type GameSearchTitleProps = {
  params: Promise<{ title: string }>;
};

async function getData(title: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );

    return response.json();
  } catch (error) {
    return null;
  }
}

export default async function GameSearchTitle({
  params,
}: GameSearchTitleProps) {
  const { title } = await params;
  const games: Game[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base:
        </h1>
        {!games && <p>Esse jogo não foi encontrado!...</p>}
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games?.length &&
            games.map((game) => <GameCard key={game.id} data={game} />)}
        </section>
      </Container>
    </main>
  );
}
