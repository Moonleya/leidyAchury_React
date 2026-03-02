export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-7 pt-10">
        <div className="rounded-2xl border bg-gray-50 px-10 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Left side */}
          <div className="flex gap-6">
            
            {/* Decorative lines */}
            <div className="flex gap-2 pt-2">
              <span className="w-1 h-20 rounded-full bg-purple-800"></span>
              <span className="w-1 h-20 rounded-full bg-purple-500"></span>
              <span className="w-1 h-20 rounded-full bg-lime-500"></span>
            </div>

            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
                Soluciones de Software
              </h1>

              <p className="mt-4 max-w-xl text-gray-600 text-lg">
                Soluciones de software especializadas para optimizar tareas clave en logística y transporte.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div>
            <div className="flex items-center gap-4 rounded-full bg-lime-100 px-6 py-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-500 text-white text-xl font-bold">
                ✓
              </div>

              <div>
                <div className="font-extrabold text-gray-900">
                  ISO 27001
                </div>
                <div className="text-xs tracking-[0.25em] text-gray-500 font-semibold">
                  CERTIFIED
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
