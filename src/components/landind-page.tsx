import { useState } from "react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-white dark:bg-gray-900 transition-colors`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Switch de modo oscuro */}
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Sección de presentación */}
        <section className="text-center py-8">
          <h1 className="text-4xl font-bold text-pastelBlue dark:text-pastelPink">
            Hola, soy tu entrenador personal
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Ofrezco sesiones personalizadas de entrenamiento de fuerza,
            movilidad y mucho más.
          </p>
        </section>

        {/* Listado de objetivos */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center text-pastelViolet dark:text-pastelBlue">
            Objetivos
          </h2>
          <ul className="flex flex-wrap justify-center gap-6 mt-6">
            <li className="bg-pastelPink dark:bg-gray-800 p-4 rounded-lg">
              Aumentar fuerza
            </li>
            <li className="bg-pastelViolet dark:bg-gray-700 p-4 rounded-lg">
              Mejorar movilidad
            </li>
            <li className="bg-pastelBlue dark:bg-gray-600 p-4 rounded-lg">
              Personalización total
            </li>
          </ul>
        </section>

        {/* Opiniones de clientes con slide horizontal */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center text-pastelBlue dark:text-pastelPink">
            Opiniones de clientes
          </h2>
          <div className="flex overflow-x-auto space-x-6 mt-6">
            <div className="min-w-[250px] bg-pastelPink dark:bg-gray-800 p-4 rounded-lg">
              <p>"¡Me encantaron las sesiones, muy personalizadas!" - Juan</p>
            </div>
            <div className="min-w-[250px] bg-pastelViolet dark:bg-gray-700 p-4 rounded-lg">
              <p>"Gran experiencia, he mejorado mi fuerza." - María</p>
            </div>
            <div className="min-w-[250px] bg-pastelBlue dark:bg-gray-600 p-4 rounded-lg">
              <p>"Recomendado al 100%." - Carlos</p>
            </div>
          </div>
        </section>

        {/* Cards de tarifas */}
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center text-pastelViolet dark:text-pastelBlue">
            Tarifas
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-pastelPink dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Básico</h3>
              <p>$50/mes</p>
            </div>
            <div className="bg-pastelViolet dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Intermedio</h3>
              <p>$80/mes</p>
            </div>
            <div className="bg-pastelBlue dark:bg-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Avanzado</h3>
              <p>$120/mes</p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <footer className="py-8">
          <h2 className="text-2xl font-semibold text-center text-pastelBlue dark:text-pastelPink">
            Contacto
          </h2>
          <div className="text-center mt-4">
            <p>Email: entrenador@example.com</p>
            <p>Teléfono: 123-456-7890</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
