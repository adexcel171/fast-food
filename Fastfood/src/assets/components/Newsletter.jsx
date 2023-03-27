function Newsletter() {
  return (
    <section className="hidden lg:block font-gilroy bg-[#FAFAFA] mx-auto py-11">
      <div className="mt-16  font-gilroy px-4 max-w-6xl mx-auto xl:px-0 pb-8">
        <h3 className={`text-center  font-extrabold text-4xl mb-4`}>
          Subscribe to our Newsteller
        </h3>
        <p className="text-[#000001]  text-center ">
          Join Us and Get Update on our Available Product.
        </p>
        <div className="relative max-w-[500px] mx-auto mt-16">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-white border border-[#c1c1c1] w-[100%] pl-2 py-4 rounded"
          />
          <button className="bg-[#00A000] text text-white rounded py-3 absolute w-[30%] right-1 top-[5px]">
            Suscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
