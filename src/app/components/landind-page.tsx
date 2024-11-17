import { Card, CardBody, Spinner, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";
import { assignSecretSanta, secretSantaList } from "./config";
import { SecretSantaCard } from "./secret-santa-card";
import { LuSparkles } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";

export default function LandingPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        {/* <Card className="my-8 shake-animation"> */}
        <Button
          onPress={onOpen}
          className="border-2 border-black my-8 shake-animation text-xl"
          color="success"
          endContent={<SlPresent />}
        >
          ISTRUZIONI
        </Button>
        {/* <Button
          className="border-2 border-black mb-8 text-xl"
          color="danger"
        >
          Bachecha (Work in progress..)
        </Button> */}
        {/* </Card> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1200px]">
          {secretSantaList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member, index) => (
              <SecretSantaCard key={index} member={member} />
            ))}
        </div>
      </div>
      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Chefffare:
              </ModalHeader>
              <ModalBody>
                <p className="flex flex-col gap-2 text-xl">
                  Clicca sul tuo nome per scoprire a chi ti tocca fare il regalo
                  quest'anno! Non barare e non guardare la scheda che non ti
                  appartiene, o subirai le pene dell'inferno......
                  <p>Anzi, provaci. Ti sfido....</p>
                  <p>
                    Fra poco sará disponibile una parte dove ognuno potrá
                    scrivere le proprie preferenze! Un bacione
                  </p>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Capito!!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
