const QuestionSuggester = () => {
    return (
        <div>
            <p className="text-2xl font-bold">Question Suggestor</p>
            <p className="italic">Python, Matplotlib, SciPy</p>
            <li>Built a machine learning algorithm to predict whether a student can correctly answer a diagnositc question based on its previous perfomance to other questions, and other students' perfomance to the same question.</li>
            <li>Data contained answers of over 500 students to over 1500 questions provided by Eedi, an oline education platform used in many schools.</li>
            <li>Implemented KNN, Item Response Theory and Neural Networks to get prediction. For each, tested the final, validation and test accuracy.</li>
        </div>
    );
}

export default QuestionSuggester;
export const tags = ['Python', 'Matplotlib', 'SciPy', 'Machine Learning', 'Data Science'];