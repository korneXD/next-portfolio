export default function Seo() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-8 px-4 py-4">
      <h1 className="font-primary font-nohemiLight text-2xl uppercase tracking-wide">
        SEO
      </h1>
      <div className="flex w-[70%] flex-col items-center justify-center gap-8">
        <div className="flex h-48 w-fit items-center justify-around gap-8 rounded-lg border px-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border"></div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full border"></div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full border"></div>
        </div>
        <p className="font-primary font-nohemiLight text-xl uppercase tracking-wide">
          Gyorsabb weboldal, ...
        </p>
      </div>
    </div>
  );
}
