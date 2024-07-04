const LearningEngine = () => {
    return (
        <div>
            <p className="text-2xl font-bold">Learning Engine for PHC</p>
            <p className="italic">Python, Flask</p>
            <p> Developed a learning engine API for teachers at PHC (Project Human City), an NGO, which used Llama 2.0 to help teachers create quizzes, tests for students by just uploading the content. </p>
            <p>Created set responses to tweak the Llama API which was hosted on Google Cloud to return the relevant information based on the content uploaded by the teacher.</p>
            <p>All the question sets, quizzes, tests were stored in MongoDB and were queried using Flask API after token authentication.</p>
        </div>
    );
}

export default LearningEngine;
export const tags = ['Python', 'Flask', 'Backend', 'API',];