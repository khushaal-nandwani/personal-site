import GithubLink from "./_Github"

const RaffleManager = () => {
  return (
    <div class="text-left">
        <div className="flex flex-row justify-between">
            <p className="text-2xl font-bold">Raffle Manager</p>
            <GithubLink link="https://github.com/CSC207-UofT/course-project-sedative-skyscrapers" />
            </div>
      <p className="italic">Java, MySQL, AWS</p>
      <li>
        A Java application to manager raffles, having a participant and an admin
        side. Create raffles, add participants, and draw winners.
      </li>
      <li>
        Developed with a team of 7. Followed clean coding practices, used design
        patterns, and satisfied SOLID principles with an easy-to-follow package
        structure.
      </li>
      <li>
        Hosted using Amazon Web Services (AWS) queried using MySQL. Linked to
        the Java app using JDBC connector and managed using MySQL Workbench.
      </li>
    </div>
  );
};

export default RaffleManager;
