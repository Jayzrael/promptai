import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="head_text text-center">
        Prompt AI Discovery
        <br className="" />
        <span className="text-center orange_gradient">Get prompt ideas</span>
      </h1>
      <p className="desc text-center">
        Discover ai prompts with this magnificient tool and share the wonder!!!!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
