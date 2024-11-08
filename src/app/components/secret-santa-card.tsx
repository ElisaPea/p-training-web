import { Card, Button, Input, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

export const secretSantaList = [
  {
    name: "Adriano",
    secretSanta: "",
    password: "sosexy",
    img: "/images/Bea.jpg",
  },
  {
    name: "Alessandra",
    secretSanta: "",
    password: "fregna",
    img: "/images/Ale.jpg",
  },
  {
    name: "Alessia",
    secretSanta: "",
    password: "creep",
    img: "/images/Alessia.jpg",
  },
  {
    name: "Barbara",
    secretSanta: "",
    password: "banana",
    img: "/images/Babi.jpg",
  },
  {
    name: "Beatrice",
    secretSanta: "",
    password: "gay",
    img: "/images/Bea.jpg",
  },
  {
    name: "Chiara",
    secretSanta: "",
    password: "paxxa",
    img: "/images/Chiara.jpg",
  },
  {
    name: "Elisa",
    secretSanta: "",
    password: "io",
    img: "/images/Eli.jpg",
  },
  {
    name: "Fabio",
    secretSanta: "",
    password: "lol",
    img: "/images/Fabio.jpg",
  },
  {
    name: "Francesca",
    secretSanta: "",
    password: "merda",
    img: "/images/Franci.jpg",
  },
  {
    name: "Katya",
    secretSanta: "",
    password: "ciao",
    img: "/images/Bea.jpg",
  },
  {
    name: "Ornella",
    secretSanta: "",
    password: "ornella",
    img: "/images/Bea.jpg",
  },
  {
    name: "Roberta",
    secretSanta: "",
    password: "gnu",
    img: "/images/Robi.jpg",
  },
  {
    name: "Rosita",
    secretSanta: "",
    password: "sonobella",
    img: "/images/Rosita.jpg",
  },
  {
    name: "Tania",
    secretSanta: "",
    password: "ciao2",
    img: "/images/Bea.jpg",
  },
];

export const SecretSantaCard = (props: any) => {
  const { member } = props;
  const [cardView, setCardView] = useState<
    "member" | "password" | "poop" | "secret"
  >("member");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(5);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const passRef = useRef<HTMLInputElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const seeSecret = () => {
    setPassword("");
    if (password === member.password) setCardView("secret");
    else setCardView("poop");
  };

  useEffect(() => {
    setIsImageLoaded(false);
    let intervalId: any;
    if (cardView === "password" && passRef && passRef.current)
      passRef.current.focus();
    if (cardView === "secret" && counter > 0) {
      intervalId = setInterval(() => {
        setCounter((prev) => {
          if (prev === 1) {
            clearInterval(intervalId);
            setCardView("member");
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setCounter(5);
    };
  }, [cardView]);

  return (
    <Card key={member.name} className="w-full">
      {/* <div onClick={() => setCardView("password")}> */}
      {cardView === "member" && (
        <div onClick={() => setCardView("password")}>
          <Skeleton isLoaded={isImageLoaded} className="h-40 w-full rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src={member.img}
                alt={member.name}
                width={800}
                height={800}
                className="rounded-lg object-cover"
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="text-white border-2 border-white px-4 py-2 rounded-lg">
                {member.name}
              </div>
            </div>
          </Skeleton>
        </div>
      )}

      {cardView === "password" && (
        <Skeleton isLoaded={isImageLoaded} className="h-40 w-full rounded-lg">
          <div className="relative h-full w-full">
            <Image
              src={"/images/Tree.webp"} // Imagen estática para la vista de la contraseña
              alt={member.name}
              width={800}
              height={800}
              className="rounded-lg object-cover"
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="flex flex-col gap-2 absolute inset-0 flex items-center justify-center cursor-pointer">
            <Input
              ref={passRef}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Password"
              onValueChange={setPassword}
              value={password}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <IoMdEyeOff className="text-default-200 pointer-events-none" />
                  ) : (
                    <IoMdEye className=" text-default-200 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs w-48"
              classNames={{
                input: [
                  "border-none",
                  "focus:border-none",
                  "focus:ring-0",
                  "bg-transparent",
                  "text-white/90",
                  "placeholder:text-white/60",
                ],
              }}
            />
            <Button
              onPress={seeSecret}
              className="text-black bg-gradient-to-tr from-green-300 via-teal-200 to-lime-200 shadow-lg"
            >
              Fatto!
            </Button>
          </div>
        </Skeleton>
      )}

      {cardView === "poop" && (
        <>
          <Skeleton isLoaded={isImageLoaded} className="h-40 w-full rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src={"/images/poop.webp"}
                alt={member.name}
                width={800}
                height={800}
                className="rounded-lg object-cover"
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-end justify-center cursor-pointer">
              <div className="text-white border-2 border-white px-4 py-2 rounded-lg mb-1">
                Ci hai provato ehheh
              </div>
              <Button
                isIconOnly
                onClick={() => setCardView("member")}
                className="absolute top-2 left-2 p-1 border-2 border-black rounded-2xl "
              >
                <IoMdArrowRoundBack />
              </Button>
            </div>
          </Skeleton>
        </>
      )}
      {cardView === "secret" && (
        <>
          <Skeleton isLoaded={isImageLoaded} className="h-40 w-full rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src={"/images/Santa.jpeg"}
                alt={member.name}
                width={800}
                height={800}
                className="rounded-lg object-cover"
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="flex flex-col gap-4 pt-8 text-white absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className=" border-2 border-white px-4 py-2 rounded-lg mb-1">
                {member.secretSanta}
              </div>
              <div>{counter}</div>
            </div>
            <div className="absolute top-2 left-2">
              <div className="text-white ">Il tuo Santa Segreto è...</div>
            </div>
          </Skeleton>
        </>
      )}
      {/* </div> */}
    </Card>
  );
};