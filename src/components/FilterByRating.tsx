import React from 'react';

interface FilterByRatingProps { }

const FilterByRating: React.FC<FilterByRatingProps> = ({ }) => {
    return (
        <div className='filterBy'>
            <div className="accordion" id="checkAccordion">
                {/* First item */}
                <div className="accordion-item" style={{ backgroundColor: "transparent", border: "none" }}>
                    <h2 className="accordion-header" id="ratingHeading">
                        <button
                            className="accordion-button myaccordian-header"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#ratingCollapse"
                            aria-expanded="true"
                            aria-controls="ratingCollapse"
                            style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                        >
                            {'Rating'}
                        </button>
                    </h2>
                    <div
                        id="ratingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="ratingHeading"
                        data-bs-parent="#checkAccordion"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rating1" />
                                <label className="form-check-label" htmlFor="rating1">
                                    1 star
                                </label>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rating2" />
                                <label className="form-check-label" htmlFor="rating2">
                                    2 star
                                </label>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rating3" />
                                <label className="form-check-label" htmlFor="rating3">
                                    3 star
                                </label>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rating4" />
                                <label className="form-check-label" htmlFor="rating4">
                                    4 star
                                </label>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rating5" />
                                <label className="form-check-label" htmlFor="rating5">
                                    5 star
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByRating;
