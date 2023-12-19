import React from "react";

interface RemarksCOAProps {
  remarks: {
    id: number;
    route: string;
    type: string;
    notes: string;
  };
}

const RemarksCOAModal: React.FC<RemarksCOAProps> = ({ remarks }) => {
  return (
    <div>
      <div>
        <h2>Remarks</h2>
        <p>Route: {remarks.route}</p>
        <p>Type: {remarks.type}</p>
        <p>Notes: {remarks.notes}</p>
      </div>
    </div>
  );
};

export default RemarksCOAModal;
