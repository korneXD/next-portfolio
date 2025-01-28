export default function Services() {
  const services = [
    { name: "Weboldal készítés", description: "..." },
    { name: "Újradizájnolás", description: "..." },
    { name: "Karbantartás", description: "..." },
  ];
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-8 px-4 py-4">
      <h1 className="font-primary font-nohemiLight text-2xl uppercase tracking-wide">
        Tapasztalataim
      </h1>
      <div className="flex w-[70%] items-center justify-between">
        {services.map((e) => (
          <div
            key={e.name}
            className="flex h-[350px] w-[30%] flex-col items-center justify-center gap-4 rounded-lg border px-4 py-4"
          >
            <div className="flex h-full w-full rounded-lg border"></div>
            <div className="flex h-fit w-full flex-col items-center justify-center">
              <h1 className="font-primary font-nohemiLight text-xl uppercase tracking-wide">
                {e.name}
              </h1>
              <p className="font-primary font-nohemiLight text-xl uppercase tracking-wide">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
