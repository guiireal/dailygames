import { Container } from "@/components/Container";
import type { Metadata } from "next";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import userImage from "../../../public/user.png";
import { FavoriteCard } from "./components/FavoriteCard";

export const metadata: Metadata = {
  title: "DalyGames - Meu perfil",
  description: "Perfil Dev Gui",
};

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImage}
              alt="Imagem perfil do usuário"
              className="rounded-full size-56 oject-cover"
            />
            <h1 className="font-bold text-2xl">Dev Gui</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size="24" color="#FFF" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
