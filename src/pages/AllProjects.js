import ProjectsList from "../components/Projects/ProjectsList";

const AllProjectsPage = () => {
    const DUMMY_PROJECTS = [
      {
        id: "m1",
        title: "Portforlio website using react and .net",
        image: "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
        description:
          "A portfolio website that is used to display all of my past, present and future projects!",
      },
      {
        id: "m2",
        title: "My first game",
        image: "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
        description: "My first ever game created from scratch!",
      },
      {
        id: "m3",
        title: "My first mobile app",
        image: "https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
        description: "My first ever mobile app created from scratch!",
      },
    ];

    return (
        <section>
            <h1>All Projects Page</h1>
            <ProjectsList projects={DUMMY_PROJECTS}/>
        </section>
    )
};

export default AllProjectsPage;