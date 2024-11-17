import CryptoJS from "crypto-js";

export interface SecretSantaPerson {
  name: string;
  secretSanta: string;
  password: string;
  img: string;
}
export const secretSantaList: SecretSantaPerson[] = [
  {
    name: "Ornella",
    secretSanta: "U2FsdGVkX18l5nVpr1Ow+EV5JHIM+7nzoD/2PavPyAw=",
    password: "ornella",
    img: "/images/Ornella.png",
  },
  {
    name: "Tania",
    secretSanta: "U2FsdGVkX18BQcVkp9/jt/g1FP/1kSs4fpZiReH9qIk=",
    password: "ciao2",
    img: "/images/Tania.jpg",
  },
  {
    name: "Elisa",
    secretSanta: "U2FsdGVkX19sDxkzA2khzAuJDTL/6YLxon0I6+3Du1Y=",
    password: "io",
    img: "/images/Eli.jpg",
  },
  {
    name: "Rosita",
    secretSanta: "U2FsdGVkX1/HPXpJutm8KDEJCoPsJTYKIPIFVwERw5Y=",
    password: "sonobella",
    img: "/images/Rosita.jpg",
  },
  {
    name: "Adriano",
    secretSanta: "U2FsdGVkX18o2oFTgTO1IO3uE/ww6yD8gOHyiOVR0K4=",
    password: "sosexy",
    img: "/images/Adri.jpg",
  },
  {
    name: "Alessandra",
    secretSanta: "U2FsdGVkX1/BOKANoZ2otskCxPBL8Oa6Nu4kOYsP2go=",
    password: "fregna",
    img: "/images/Ale.jpg",
  },
  {
    name: "Alessia",
    secretSanta: "U2FsdGVkX19a1Mf6Mf0vSFSM0wvc0AYcqqNCsoaluhk=",
    password: "creep",
    img: "/images/Ales.jpg",
  },
  {
    name: "Barbara",
    secretSanta: "U2FsdGVkX19zXs9XqSDf0WNJKYB03Ncm7OoJ1rbSASs=",
    password: "banana",
    img: "/images/Babi.jpg",
  },
  {
    name: "Beatrice",
    secretSanta: "U2FsdGVkX18HHvXhI+ej9mB15D/LixHqIUi+l2Ba49M=",
    password: "gay",
    img: "/images/Bea.jpg",
  },
  {
    name: "Chiara",
    secretSanta: "U2FsdGVkX19jO4B0CdYGcH35KCNouglg/u0p6mPesQA=",
    password: "paxxa",
    img: "/images/Chiara.jpg",
  },
  {
    name: "Fabio",
    secretSanta: "U2FsdGVkX19vVOOIV+ePfT5OzwtaB3Xo4bEhxqOX0UQ=",
    password: "lol",
    img: "/images/Fabio.jpg",
  },
  {
    name: "Francesca",
    secretSanta: "U2FsdGVkX1+zGCBGcEC88Fe88NaTRX5J6H/O3ZS9IsY=",
    password: "fraculo",
    img: "/images/Francii.jpg",
  },
  {
    name: "Marco",
    secretSanta: "U2FsdGVkX1+43Z4MQ96QOI7I1pM4ZRIsp9eIYoQ6gvE=",
    password: "paloma",
    img: "/images/marco.png",
  },
  {
    name: "Roberta",
    secretSanta: "U2FsdGVkX1/GiBcj8twRRdUoiThA+CSwaTmAtkFL+Hk=",
    password: "gnu",
    img: "/images/Robii.jpg",
  },
];
const passwordList = [
  { name: "Ornella", password: "ornella" },
  { name: "Tania", password: "ciao2" },
  { name: "Elisa", password: "io" },
  { name: "Rosita", password: "sonobella" },
  { name: "Adriano", password: "sosexy" },
  { name: "Alessandra", password: "fregna" },
  { name: "Alessia", password: "creep" },
  { name: "Barbara", password: "banana" },
  { name: "Beatrice", password: "gay" },
  { name: "Chiara", password: "paxxa" },
  { name: "Fabio", password: "lol" },
  { name: "Francesca", password: "fraculo" },
  { name: "Marco", password: "paloma" },
  { name: "Roberta", password: "gnu" },
];

export const assignSecretSanta = (members: SecretSantaPerson[]) => {
  // Restricciones de asignación
  const availableNames = {
    Ornella: ["Chiara", "Francesca", "Alessia", "Fabio"],
    Tania: ["Adriano", "Alessandra", "Fabio", "Roberta"],
    Elisa: [
      "Chiara",
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

  // Lista de personas que pueden recibir "Ornella" como su Secret Santa
  const eligibleForOrnella = ["Chiara", "Francesca", "Alessia", "Fabio"];

  // Función recursiva para asignar nombres
  const backtrack = (index: number): boolean => {
    if (index === members.length) {
      // Caso base: todos los miembros tienen un Secret Santa asignado
      return true;
    }

    const member = members[index];
    let possibleNames: string[];

    // Restricciones específicas según el nombre
    if (member.name === "Ornella") {
      possibleNames = availableNames.Ornella.filter(
        (name) => !Object.values(assignedNames).includes(name)
      );
    } else if (member.name === "Tania") {
      possibleNames = availableNames.Tania.filter(
        (name) => !Object.values(assignedNames).includes(name)
      );
    } else if (member.name === "Elisa") {
      possibleNames = availableNames.Elisa.filter(
        (name) => !Object.values(assignedNames).includes(name)
      );
    } else if (member.name === "Rosita") {
      possibleNames = availableNames.Rosita.filter(
        (name) => !Object.values(assignedNames).includes(name)
      );
    } else {
      // Miembros restantes (sin restricciones específicas)
      possibleNames = members
        .filter(
          (m) =>
            m.name !== member.name &&
            !Object.values(assignedNames).includes(m.name) &&
            // Si el nombre es "Ornella", verificar que sea elegible
            (m.name !== "Ornella" || eligibleForOrnella.includes(member.name))
        )
        .map((m) => m.name);
    }

    // Intentar asignar cada nombre posible
    for (const name of possibleNames) {
      assignedNames[member.name] = name;

      // Continuar con el siguiente miembro
      if (backtrack(index + 1)) {
        return true;
      }

      // Deshacer la asignación si no funciona
      delete assignedNames[member.name];
    }

    // Si no hay nombres válidos, regresar false para retroceder
    return false;
  };

  // Ordenar la lista de miembros según el número de restricciones (procesar primero los más restringidos)
  members.sort((a, b) => {
    const aRestrictions =
      availableNames[a.name as keyof typeof availableNames]?.length ??
      members.length;
    const bRestrictions =
      availableNames[b.name as keyof typeof availableNames]?.length ??
      members.length;
    return aRestrictions - bRestrictions;
  });

  // Ejecutar el algoritmo de backtracking
  if (!backtrack(0)) {
    console.error(
      "No se pudo asignar Secret Santa con las restricciones dadas."
    );
    return null;
  }

  // Devolver la lista con los resultados
  return members.map((member) => {
    const secretSanta = assignedNames[member.name];
    const encryptedSecretSanta = CryptoJS.AES.encrypt(
      secretSanta,
      member.password
    ).toString();
    return { ...member, secretSanta: encryptedSecretSanta };
  });
};
