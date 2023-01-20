import React from 'react';
import FollowUps from '../components/FollowUps';
import NewProject from '../components/NewProject';
import Projects from '../components/Projects';
import SearchBar from '../components/SearchBar';
import Todos from '../components/Todos';


export default function Home() {
  return (
    <div>Home
        <SearchBar />
        <NewProject />
        <FollowUps />
        <Todos />
        <Projects />
    </div>
  )
}
