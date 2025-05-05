import React from 'react';

const Books = () => {
    const books = [
        { title: 'The Pragmatic Programmer', authors: 'Andy Hunt and Dave Thomas' },
        { title: 'Jaws: The Story of a Hidden Epidemic', authors: 'Sandra Kahn and Paul R. Ehrlich' },
        { title: "The Murder of Roger Ackroyd", authors: "Agatha Christie"}
        // Add more books here
    ];

    return (
        <div className='md:text-left'>
            {books.map((book, index) => (
                <div key={index} className='mb-4'>
                    <p className='text-2xl'>{book.title}</p>
                    <p className="italic ">by {book.authors}</p>
                </div>
            ))}
        </div>
    );
};

export default Books;
