export default function Projects() {
  const projects = [
    { name: "Github link 1", description: "..." },
    { name: "Github link 2", description: "..." },
    { name: "Github link 3", description: "..." },
    { name: "Github link 4", description: "..." },
    { name: "Github link 5", description: "..." },
    { name: "Github link 6", description: "..." },
  ];
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-8 px-4 py-4">
      <div className="flex w-[70%] max-w-[70%] flex-wrap items-center justify-between gap-8">
        {projects.map((e) => (
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
