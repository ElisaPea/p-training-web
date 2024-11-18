import { Card, Button, Input, Skeleton } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import CryptoJS from "crypto-js";
import { secretSantaList, SecretSantaPerson } from "./config";

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

  const decryptName = (
    encryptedName: string | CryptoJS.lib.CipherParams,
    pass: string
  ) => {
    const bytes = CryptoJS.AES.decrypt(encryptedName, pass);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // setIsImageLoaded(false);
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
    <Card key={member.name} className="h-full w-64 md:w-full mx-auto border-4 ">
      {cardView === "member" && (
        <div onClick={() => setCardView("password")}>
          <Skeleton isLoaded={isImageLoaded} className="h-48 w-full rounded-lg">
            <div className="relative h-full w-full">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-lg object-cover w-full h-full"
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
        <Skeleton isLoaded={isImageLoaded} className="h-48 w-full rounded-lg">
          <div className="relative h-full w-full">
            <img
              src="/images/Tree.webp"
              alt={member.name}
              className="rounded-lg object-cover w-full h-full"
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
          <Skeleton isLoaded={isImageLoaded} className="h-48 w-full rounded-lg">
            <div className="relative h-full w-full">
              <img
                src="/images/poop.webp"
                alt={member.name}
                className="rounded-lg object-cover w-full h-full"
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
          <Skeleton isLoaded={isImageLoaded} className="h-48 w-full rounded-lg">
            <div className="relative h-full w-full">
              <img
                src="/images/Santa.jpeg"
                alt={member.name}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="flex flex-col gap-4 pt-8 text-white absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className=" border-2 border-white px-4 py-2 rounded-lg mb-1">
                {decryptName(member.secretSanta, member.password)}
              </div>
              <div>{counter}</div>
            </div>
            <div className="absolute top-2 left-2">
              <div className="text-white ">Il tuo Santa Segreto è...</div>
            </div>
          </Skeleton>
        </>
      )}
    </Card>
  );
};
