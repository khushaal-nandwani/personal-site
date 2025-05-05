import React from 'react';

const Education = () => {
    return (
        <div className='md:text-left'>
            <div className='flex flex-row items-center justify-between'>
                <a href="https://www.utoronto.ca/" target="_blank" className='text-2xl font-bold hover:text-slate-500'>University of Toronto</a> 
                <div>2020 - 2024</div>
            </div>
            <p className='italic'>Computer Science Major with Minors in Economics and Statistics</p>
            <p>GPA: 3.6/4.0</p>
            <p className='font-bold'>Awards</p>
            <div className='ml-4'>
                <p>International Scholar Award of 100,000 CAD</p>
                <p>Dean's List Scholar 2021, 2022, 2024</p>
            </div>
            <p className='font-bold'>Courses</p>
            <p className='ml-4'> 
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc420h1"> Computer Vision</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc369h1"> Operating Systems</a>, 
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc373h1"> Algorithms</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/sta302h1"> Data Analysis</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc207h1"> Software Design</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc301h1"> Software Engineering</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc258h1"> Computer Organization</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc343h1"> Databases</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc263h1"> Data Structure and Analysis</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc209h1"> Systems Programming</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc311h1"> Machine Learning</a>,
                <a className="hover:text-slate-500" target="_blank" href="https://artsci.calendar.utoronto.ca/course/csc384h1"> Artificial Intelligence</a>
            </p>


        </div>
    );
}

export default Education;
// TODO: request transcript form