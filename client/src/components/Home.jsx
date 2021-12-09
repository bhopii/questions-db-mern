import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResultTable from './ResultTable';

function Home() {
    const [questions, setQuestions] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        axios.get("/api/questions").then((res) => {
            setQuestions(res.data);
        })
    },[]);

    const filterData = () => {
        return questions.filter((question) => 

            question.question.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
            question.keywords.filter(keyword => keyword.toLowerCase().indexOf(searchString.toLowerCase())) ||
            question.answer.toLowerCase().indexOf(searchString.toLowerCase()) > -1
        )
    }
    const handleInput = (event) => {
        setSearchString(event.target.value);
    }

    return (

            <div>
                <input type="text" name="searchString" placeholder="Search" value={searchString} onChange={handleInput}/> 
                <h1>This is home</h1>
                <ResultTable questions={filterData()}/>  
            </div>
    )
}

export default Home
