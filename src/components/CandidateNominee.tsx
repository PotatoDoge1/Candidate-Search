import type { Candidate } from "../interfaces/Candidate.tsx";
// import { searchGithub } from "../api/API.tsx";

type CandidateNomineeProps = {
    currentCandidate: Candidate;
    selectCandidate: (isSelected: boolean) => void;
};

const CandidateNominee = ({ currentCandidate, selectCandidate }: CandidateNomineeProps) => {
    return (
        <>
            <section className="d-flex justify-content-center align-items-center my-3">
                {currentCandidate?.login ? (
                    currentCandidate?.avatar_url ? (
                        <>
                            <div>
                                <h3>{currentCandidate.login}</h3>
                                <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer" className="d-block mb-3">{currentCandidate.html_url}</a>
                                <img
                                    src={`${currentCandidate.avatar_url}`}
                                    className="rounded-circle border border-secondary"
                                />
                            </div>
                        </>
                    ) : (
                        <h2>Image not found!!!</h2>
                    )
                ) : (
                    <h2>Refresh to see more candidates!</h2>
                )}
            </section>

            <section className="d-flex justify-content-between mt-3">
                <button
                    className="btn btn-danger me-2"
                    onClick={() => selectCandidate(false)}
                    style={{ fontSize: '20px' }}
                >
                    &#10006;
                </button>
                <button
                    className="btn btn-success me-2"
                    onClick={() => selectCandidate(true)}
                    style={{ fontSize: '20px', marginLeft: '10px' }}
                >
                    &#10004;
                </button>
            </section>
        </>
    );
};


export default CandidateNominee;
  