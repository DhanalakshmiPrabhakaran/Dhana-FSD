import React from 'react'

function Home() {
    
        const list = [
        {
            title: 'React',
            Student: 'Dhanalakshmi',
            Score: 5
        },
        {
            title: 'Node',
            Student: 'Dhanalakshmi',
            Score: 4
        },
        {
            title: 'MongoDB',
            Student: 'Dhanalakshmi',
            Score: 3
        }

        ]
     return(
            <>
                <h1>List of Subjects:</h1>
                <ol>
                    {list.map(function(item){
                        return<li>{`${item.Student} - ${item.title} - ${item.Score}`}</li>
                    })}
                </ol>
            </>
        )
    }

export default Home