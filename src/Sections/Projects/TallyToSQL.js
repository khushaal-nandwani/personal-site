import GithubLink from "./_Github"

const TallyToSQL = () => {
  return (
    <div>
        <div class="flex flex-row justify-between">
            <p className="text-2xl font-bold">Tally-To-SQL</p>
            <GithubLink link="https://github.com/khushaal-nandwani/tally-to-SQL" />
        </div>
        <p className="italic">XML, SQL, Python</p>
        <li>Developed a Python script to convert Tally - the largest software accounting software in India - export format XML files to an SQL database.</li>
        <li>Used SQL queries to create tables and insert data into the database while providing an interactive GUI.</li>
        <li>Wrote XLST scripts, to clean and modify the XML files</li>



    </div>
  );
};

export default TallyToSQL;
export const tags = ["XML", "SQL", "Python"];
