import ProjectsList from "../Projects/ProjectsList";
import { AiOutlineHistory } from "react-icons/ai";
import { Container } from "react-bootstrap";

const AllProjects = () => {
  const DUMMY_PROJECTS = [
    {
      id: "m1",
      title: "Portforlio website using react and .net",
      image:
        "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
      description:
        "A portfolio website that is used to display all of my past, present and future projects!",
    },
    {
      id: "m2",
      title: "My first game",
      image:
        "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
      description: "My first ever game created from scratch!",
    },
    {
      id: "m3",
      title: "My first mobile app",
      image:
        "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
      description: "My first ever mobile app created from scratch!",
    },
  ];

  return (
    <section id="projects">
      <Container className="px-5 py-10 mx-auto">
        <div className="text-center">
          <AiOutlineHistory className="w-10 inline-block mb-4 cap" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Projects
          </h1>
          <p>
            Here is all of the projects that I have worked on either in my spare
            time or as part of my education.
          </p>
        </div>


        <ProjectsList projects={DUMMY_PROJECTS} />
      </Container>
    </section>
  );
};

export default AllProjects;
