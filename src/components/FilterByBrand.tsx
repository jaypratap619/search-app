import React from 'react';

interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}
interface FilterByProps {
    filterName: string,
    products: Array<Product>
}


const FilterBy: React.FC<FilterByProps> = ({ filterName, products }) => {
    return (
        <div className='filterBy'>
            <div className="accordion" id="checkAccordion"   >
                {/* First item */}
                <div className="accordion-item " style={{ backgroundColor: "transparent", border: "none" }} >
                    <h2 className="accordion-header" id="item1Heading" >
                        <button
                            className="accordion-button myaccordian-header"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#item1Collapse"
                            aria-expanded="true"
                            aria-controls="item1Collapse"
                            style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                        >
                            {filterName}
                        </button>
                    </h2>
                    <div
                        id="item1Collapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="item1Heading"
                        data-bs-parent="#checkAccordion"
                    >
                        {
                            products?.map(product => {
                                return <div className="accordion-body">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check1" />
                                        <label className="form-check-label" htmlFor="check1">
                                            {product.brand}
                                        </label>
                                    </div>

                                </div>
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FilterBy;
