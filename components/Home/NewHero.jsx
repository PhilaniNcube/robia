/* eslint-disable @next/next/no-img-element */
const NewHero = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-4 py-6  h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col w-full justify-center z-30 text-white">
          <h1 className="font-mont font-light uppercase text-3xl">
            We are a superstore <br />& One-stop shop
          </h1>
          <p className="font-myriad font-semibold text-md my-3">
            FOR FARMERS, SMALL RESTAURANTS, FOOD TRUCKS, CRAFTERS & INFORMAL
            TRADERS
          </p>
          <p className="text-sm">
            Our marketplace encourages youth businesses and all entrepreneurs in
            the foods and crafts industry to showcase their products on our
            platform.
          </p>
        </div>

        <img src="/images/background.png" className="hidden md:block w-full object-cover" alt="shopping" />
      </div>
    </section>
  );
};
export default NewHero;
