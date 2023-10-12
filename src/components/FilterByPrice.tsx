import React from 'react';

interface FilterByPriceProps { }

const FilterByPrice: React.FC<FilterByPriceProps> = ({ }) => {
    return (
        <div className='filterBy'>
            <div className="accordion" id="checkAccordion">
                {/* First item */}
                <div className="accordion-item" style={{ backgroundColor: "transparent", border: "none" }}>
                    <h2 className="accordion-header" id="priceHeading">
                        <button
                            className="accordion-button myaccordian-header"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#priceCollapse"
                            aria-expanded="true"
                            aria-controls="priceCollapse"
                            style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                        >
                            {'Price'}
                        </button>
                    </h2>
                    <div
                        id="priceCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="priceHeading"
                        data-bs-parent="#checkAccordion"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check1" />
                                <label className="form-check-label" htmlFor="check1">
                                    under 1500
                                </label>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="check2" />
                                <label className="form-check-label" htmlFor="check2">
                                    under 1000
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
