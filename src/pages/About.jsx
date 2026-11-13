import { Collapse, HomeBanner } from "../components/components";
import AboutCover from "/about-cover.png";

const aboutContents = [
  {
    label: "Fiabilité",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi reprehenderit iusto fugiat nemo aliquam corrupti in consequuntur animi voluptatem, voluptatibus deserunt dolorum illum tenetur sint laudantium dicta, deleniti dolores.",
  },
  {
    label: "Respect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi reprehenderit iusto fugiat nemo aliquam corrupti in consequuntur animi voluptatem, voluptatibus deserunt dolorum illum tenetur sint laudantium dicta, deleniti dolores.",
  },
  {
    label: "Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi reprehenderit iusto fugiat nemo aliquam corrupti in consequuntur animi voluptatem, voluptatibus deserunt dolorum illum tenetur sint laudantium dicta, deleniti dolores.",
  },
  {
    label: "Sécurité",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi reprehenderit iusto fugiat nemo aliquam corrupti in consequuntur animi voluptatem, voluptatibus deserunt dolorum illum tenetur sint laudantium dicta, deleniti dolores.",
  },
];

function About() {
  return (
    <div className="AboutPage">
      <HomeBanner url={AboutCover} title={""} overlay={false} />
      <div className="AboutPage__collapses">
        {aboutContents.map((coll, i) => (
          <Collapse key={i} label={coll.label} content={coll.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
