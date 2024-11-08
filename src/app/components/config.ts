import CryptoJS from "crypto-js";

export interface SecretSantaPerson {
  name: string;
  secretSanta: string;
  password: string;
  img: string;
}

export const secretSantaList: SecretSantaPerson[] = [
  {
    name: "Adriano",
    secretSanta: "U2FsdGVkX180IIe624oO+1ayPcBXz9SEPDfRXtx0v8Y=",
    password: "sosexy",
    img: "/images/Adri.jpg",
  },
  {
    name: "Alessandra",
    secretSanta: "U2FsdGVkX1/f0qcg3nMMASP6O5suVPLydorVcscXSuQ=",
    password: "fregna",
    img: "/images/Ale.jpg",
  },
  {
    name: "Alessia",
    secretSanta: "U2FsdGVkX19BGbV1DriYKE4iIraMLmhzZ4wJg3QzYKE=",
    password: "creep",
    img: "/images/Ales.jpg",
  },
  {
    name: "Barbara",
    secretSanta: "U2FsdGVkX1+zI8qJEYF7ITNkm0PbyO5jdsWIPUBZyts=",
    password: "banana",
    img: "/images/Babi.jpg",
  },
  {
    name: "Beatrice",
    secretSanta: "U2FsdGVkX1/FP2NZPPRN6BbxhWR8gfGjs6sv02yoSgU=",
    password: "gay",
    img: "/images/Bea.jpg",
  },
  {
    name: "Chiara",
    secretSanta: "U2FsdGVkX1/KrTz9AMOJCCPBcM+F+ozSaKoXK9BIi2M=",
    password: "paxxa",
    img: "/images/Chiara.jpg",
  },
  {
    name: "Elisa",
    secretSanta: "U2FsdGVkX18ecnPdISS0Je62vo/d9daRTtXONNAF1FU=",
    password: "io",
    img: "/images/Eli.jpg",
  },
  {
    name: "Fabio",
    secretSanta: "U2FsdGVkX18zsSlfrOUui/TWMmq+mZdzeyeRv8mGdLo=",
    password: "lol",
    img: "/images/Fabio.jpg",
  },
  {
    name: "Francesca",
    secretSanta: "U2FsdGVkX1/xYt0oRY69vOJ+n2/XjZQKSYk5vyvzM9M=",
    password: "fraculo",
    img: "/images/Francii.jpg",
  },
  {
    name: "Katya",
    secretSanta: "U2FsdGVkX1+2boT+hBqhyhO5AsHvVok7ckur7iImVs0=",
    password: "ciao",
    img: "/images/Katya.jpg",
  },
  {
    name: "Ornella",
    secretSanta: "U2FsdGVkX1/oJUTzTEJ2ufcOiPNxFHMuVujuhyYD3xg=",
    password: "ornella",
    img: "/images/Ornella.png",
  },
  {
    name: "Roberta",
    secretSanta: "U2FsdGVkX1/9AMQ/z83sigfKgoUzsQ3QeIJhx6JCpv0=",
    password: "gnu",
    img: "/images/Robii.jpg",
  },
  {
    name: "Rosita",
    secretSanta: "U2FsdGVkX1/EwcNC6F5yYHC7/GjdOXKewuuqkg7d9bw=",
    password: "sonobella",
    img: "/images/Rosita.jpg",
  },
  {
    name: "Tania",
    secretSanta: "U2FsdGVkX184isCbaKnOg+WvUbsOjjY6tRXuFvurnxw=",
    password: "ciao2",
    img: "/images/Tania.jpg",
  },
];

export const assignSecretSanta = (members: SecretSantaPerson[]) => {
  // Restricciones de asignación
  const availableNames = {
    Ornella: ["Chiara", "Francesca", "Alessia", "Fabio"],
    Tania: ["Katya", "Adriano", "Alessandra", "Fabio", "Roberta"],
    Katya: [
      "Chiara",
      "Francesca",
      "Alessia",
      "Fabio",
      "Roberta",
      "Barbara",
      "Adriano",
      "Beatrice",
    ],
    Elisa: [
      "Francesca",
      "Alessia",
      "Alessandra",
      "Roberta",
      "Barbara",
      "Beatrice",
    ],
    Rosita: [
      "Chiara",
      "Alessandra",
      "Francesca",
      "Alessia",
      "Beatrice",
      "Elisa",
      "Adriano",
      "Roberta",
      "Barbara",
    ],
  };

  const assignedNames: { [key: string]: string } = {};

  // Función para asignar el Secret Santa con las restricciones
  const assign = () => {
    members.forEach((member) => {
      let possibleNames: string[];

      // Condiciones para cada persona
      if (member.name === "Ornella") {
        possibleNames = availableNames.Ornella;
      } else if (member.name === "Tania") {
        possibleNames = availableNames.Tania;
      } else if (member.name === "Katya") {
        possibleNames = availableNames.Katya.filter((name) => name !== "Elisa");
      } else if (member.name === "Elisa") {
        possibleNames = availableNames.Elisa.filter(
          (name) => name !== "Katya" && name !== "Tania"
        );
      } else if (member.name === "Rosita") {
        possibleNames = availableNames.Rosita;
      } else {
        // Miembros restantes (si no son los mencionados)
        possibleNames = members
          .filter(
            (m) =>
              m.name !== member.name &&
              !Object.values(assignedNames).includes(m.name)
          )
          .map((m) => m.name);
      }

      // Asignar un nombre aleatorio de los posibles
      const randomName =
        possibleNames[Math.floor(Math.random() * possibleNames.length)];
      assignedNames[member.name] = randomName;
    });
  };

  // Ejecutar la asignación y verificar restricciones
  assign();

  // Verificar que no se repitan asignaciones (un miembro no puede ser su propio Secret Santa)
  for (const member of members) {
    if (assignedNames[member.name] === member.name) {
      console.error("Error: Un miembro no puede ser su propio Secret Santa.");
      return;
    }
  }

  // Encriptar los resultados y devolver la lista
  return members.map((member) => {
    const secretSanta = assignedNames[member.name];
    const encryptedSecretSanta = CryptoJS.AES.encrypt(
      secretSanta,
      member.password
    ).toString();
    return { ...member, secretSanta: encryptedSecretSanta };
  });
};
