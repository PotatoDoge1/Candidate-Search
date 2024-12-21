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
                        <img
                            src={`${currentCandidate.avatar_url}`}
                            className="rounded-circle border border-secondary"
                        />
                    ) : (
                        <h2>Image not found!!!</h2>
                    )
                ) : (
                    <h2>Refresh to see more candidates!</h2>
                )}
            </section>

            <section className="d-flex justify-content-between mt-3">
                <button
                    className="btn btn-danger"
                    onClick={() => selectCandidate(false)}
                    style={{ fontSize: '20px' }}
                >
                    ✖
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => selectCandidate(true)}
                    style={{ fontSize: '20px' }}
                >
                    ✔
                </button>
            </section>
        </>
    );
};


export default CandidateNominee;
  