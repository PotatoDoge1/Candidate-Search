import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateNominee from '../components/CandidateNominee';
import type { Candidate } from '../interfaces/Candidate';

const CandidateSearch = () => {
  const [displayedCandidate, setCandidate] = useState<Candidate>({
    login: '',
    id: null,
    avatar_url: '',
    html_url: '',
    repos_url: ''
  });

  const getCandidates = async () => {
    try{
      const response: Candidate[] = await searchGithub();
      const candidateToBePresented = {
        login: response[0].login,
        id: response[0].id,
        avatar_url: response[0].avatar_url,
        html_url: response[0].html_url,
        repos_url: response[0].repos_url
      }
      setCandidate(candidateToBePresented);
    } catch (error) {
      console.error("Error fetching candidates:", error)
    }
  }

  const selectCandidate = async (isSelected: boolean) => {
    if (isSelected) {
      const candidateList: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      candidateList.push(displayedCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(candidateList));
      getCandidates();
    } else {
      getCandidates();
    }
  }

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <>
    <h1 className="mt-2 py-1">Candidate Search</h1>
    <CandidateNominee currentCandidate={displayedCandidate} selectCandidate={selectCandidate} />
    </>
  );

};

export default CandidateSearch;
