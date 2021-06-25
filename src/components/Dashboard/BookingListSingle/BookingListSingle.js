import React from 'react';

const BookingListSingle = ({singleBook}) => {
    return (
        <div className="col-md-6">
                  <div
                    style={{ backgroundColor: "white", borderRadius: "0.5em" }}
                    className="mx-1 mb-4"
                  >
                    <h3
                      style={{ fontWeight: "600" }}
                      className="px-3 pt-3 pb-2"
                    >
                      {singleBook.services.serviceName}
                    </h3>
                    <h5 style={{fontWeight: '500'}}className="px-3 pt-2 pb-3">Status: {singleBook.serviceStatus}</h5>
                  </div>
                </div>
    );
};

export default BookingListSingle;