import { Card, CardBody, Spinner, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { SecretSantaCard, secretSantaList } from "./secret-santa-card";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 4000);

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <div className="flex flex-col items-center mt-20 px-4">
        {/* Título */}
        <Card>
          <CardBody className="flex flex-row gap-2 text-3xl font-semibold text-center ">
            🎄
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#D32F2F] to-[#FF5722]">
              Buon Natale 2024 famiglia pazza!
            </div>
            🎅
          </CardBody>
        </Card>

        <div className="text-center text-md my-16 max-w-[820px] border-2 rounded-2xl border-red-500 p-2 bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white">
          Clicca sul tuo nome per scoprire a chi ti tocca fare il regalo
          quest'anno! Non barare e non guardare la scheda che non ti appartiene,
          o subirai le pene dell'inferno...... Anzi, provaci. Ti sfido....
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-[1200px]">
          {secretSantaList.map((member, index) => (
            <SecretSantaCard key={index} member={member} isLoaded={isLoaded} />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-4">
  <Spinner color="default" />
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="danger" />
</div> */
}
