import { useEffect, useState } from 'react';
import type { Candidate } from '../interfaces/Candidate.tsx';
import SavedCandidate from './SavedCandidate.tsx';


const SavedCandidateList = () => {

    const [candidateList, setCandidateList] = useState<Candidate[]>([]);

    useEffect(() => {
        const savedCandidates = localStorage.getItem('savedCandidates');
        let candidates: Candidate[] = [];
        candidates = JSON.parse(savedCandidates || '[]');
        setCandidateList(candidates);
    }, [] );

    const removeCandidate = (id: number) => {
        let parsedCandidates: Candidate[] = [];
        const savedCandidates = localStorage.getItem('savedCandidates');
        
        if (typeof savedCandidates === 'string') {
            parsedCandidates = JSON.parse(savedCandidates);
        } else {
            console.log('Error, savedCandidates is null');
            return;
        }

        parsedCandidates = parsedCandidates.filter( (candidate: Candidate) => candidate.id !== id );
        localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
        setCandidateList(parsedCandidates)
    }

    return (
        <div>
            {candidateList.map((candidate) => (
                <SavedCandidate
                    key={candidate.id}
                    currentCandidate={candidate}
                    removeCandidate={removeCandidate}
                />
            ))}
        </div>
    );
}

export default SavedCandidateList;