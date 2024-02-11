import React, { useEffect, useState} from 'react'
import { Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'

const IssueCards = () => {

    const [response, setResponse] = useState([])

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://spit-hackthn.vercel.app/get-user-data/deepgohil',
        headers: { 
          'accept': 'application/json'
        }
      };
      
      axios.request(config)
      .then((response) => {
        setResponse((response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    const categories_issues = response?.category_issues;
    // const fav_lan = response[0].favorite_language;
    const bug = categories_issues?.bug;
    const documentation = categories_issues?.documentation;
    const duplicates = categories_issues?.duplicate;
    const enhancement = categories_issues?.enhancement;
    // const important = categories_issues.important;
    // const invalid = categories_issues.invalid;
    // const que = categories_issues.question;
    const good_first_issue = categories_issues?.good_first_issue;
    // const help_wanted = categories_issues.help_wanted;
    // const wontfix = categories_issues.wontfix;

    // console.log(bug)
  return (
    <>
    <Heading m='1%'>Bug</Heading>
    <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {bug?.map(issue => (
        <div className="ag-courses_item" key={issue.id}>
        <a href={issue.html_url} className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
  
          <div className="ag-courses-item_title">
          {issue.title}
          </div>
  
          <div className="ag-courses-item_date-box">
          Created: 
            <span className="ag-courses-item_date">
              {issue.created_at}
            </span>
          </div>
        </a>
  </div>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Good First Issue</Heading>
    <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {good_first_issue?.map(issue => (
        <div className="ag-courses_item" key={issue.id}>
        <a href={issue.html_url} className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
  
          <div className="ag-courses-item_title">
          {issue.title}
          </div>
  
          <div className="ag-courses-item_date-box">
          Created: 
            <span className="ag-courses-item_date">
            {issue.created_at}
            </span>
          </div>
        </a>
  </div>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Documentation</Heading>
    <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {documentation?.map(issue => (
        <div className="ag-courses_item" key={issue.id}>
        <a href={issue.html_url} className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
  
          <div className="ag-courses-item_title">
          {issue.title}
          </div>
  
          <div className="ag-courses-item_date-box">
          Created: 
            <span className="ag-courses-item_date">
            {issue.created_at}
            </span>
          </div>
        </a>
  </div>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Duplicate</Heading>
    <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {duplicates?.map(issue => (
        <div className="ag-courses_item" key={issue.id}>
        <a href={issue.html_url} className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
  
          <div className="ag-courses-item_title">
          {issue.title}
          </div>
  
          <div className="ag-courses-item_date-box">
          Created: 
            <span className="ag-courses-item_date">
            {issue.created_at}
            </span>
          </div>
        </a>
  </div>
      ))}
    </SimpleGrid>
    <Heading m='1%'>Enhancement</Heading>
    <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {enhancement?.map(issue => (
        <div className="ag-courses_item" key={issue.id}>
          <a href={issue.html_url} className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>
    
            <div className="ag-courses-item_title">
            {issue.title}
            </div>
    
            <div className="ag-courses-item_date-box">
            Created: 
              <span className="ag-courses-item_date">
              {issue.created_at}
              </span>
            </div>
          </a>
    </div>
      ))}
    </SimpleGrid>
    </>
  )
}

export default IssueCards

