import ExploreBtn from "@/components/ExploreBtn";

const page = () => {
  return (
    <div>
      <h1 className="text-center">
        The Hub for every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conderences, ALl in One Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <li key={i + 1}>Events {i + 1}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
