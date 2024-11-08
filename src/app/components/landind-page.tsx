import { Card, CardBody, Spinner, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { secretSantaList } from "./config";
import { SecretSantaCard } from "./secret-santa-card";
import { LuSparkles } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";

export default function LandingPage() {
  // <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#D32F2F] to-[#FF5722]">

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <div className="flex flex-col items-center my-10 px-4">
        {/* Título */}
        <Card className="relative overflow-visible border-2 border-red-200 ">
          <div className="absolute top-[-10px] left-[-10px] text-red-600 text-2xl z-10">
            {/* <SlPresent /> */}
            <LuSparkles />
          </div>
          <div className="absolute top-[-10px] right-[-10px] text-red-600 text-2xl">
            <LuSparkles />
            {/* <SlPresent /> */}
          </div>
          <CardBody className="flex flex-row gap-2 text-3xl font-semibold text-center ">
            🎄🎄🎄🎄🎄
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#D32F2F] to-[#FF5722]">
              Buon Natale 2024 famiglia pazza!
            </div>
            🎅🎅🎅🎅🎅
          </CardBody>
        </Card>
        <Card className="relative overflow-visible border-2 border-red-200 my-8  max-w-[320px]">
          <div className="absolute top-[-10px] left-[-10px] text-red-600 text-2xl z-10">
            <SlPresent />
            {/* <LuSparkles /> */}
          </div>
          <div className="absolute top-[-10px] right-[-10px] text-red-600 text-2xl">
            {/* <LuSparkles /> */}
            <SlPresent />
          </div>
          <CardBody className="flex flex-col gap-2 text-xl font-semibold text-center text-green-700">
            ISTRUZIONI:
            <div className="flex flex-col bg-clip-text text-transparent bg-gradient-to-r from-[#D32F2F] to-[#FF5722]">
              Clicca sul tuo nome per scoprire a chi ti tocca fare il regalo
              quest'anno! Non barare e non guardare la scheda che non ti
              appartiene, o subirai le pene dell'inferno......
              <div>Anzi, provaci. Ti sfido....</div>
            </div>
          </CardBody>
        </Card>

        {/* <div className="text-center text-md my-16 max-w-[820px] border-2 rounded-2xl border-red-500 p-2 bg-gradient-to-r from-[#D32F2F] to-[#FF5722] text-white">
          Clicca sul tuo nome per scoprire a chi ti tocca fare il regalo
          quest'anno! Non barare e non guardare la scheda che non ti appartiene,
          o subirai le pene dell'inferno...... Anzi, provaci. Ti sfido....
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1200px]">
          {secretSantaList.map((member, index) => (
            <SecretSantaCard key={index} member={member} />
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
