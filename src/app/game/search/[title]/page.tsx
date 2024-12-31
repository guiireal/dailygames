import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Game } from "@/types";

export type GameSearchTitleProps = {
  params: { title: string };
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
  params: { title },
}: GameSearchTitleProps) {
  const games: Game[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base:
        </h1>
      </Container>
    </main>
  );
}
