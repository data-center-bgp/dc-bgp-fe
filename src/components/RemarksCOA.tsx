import React from "react";

interface RemarksCOAProps {
  remarks: {
    id: number;
    route: string;
    type: string;
    notes: string;
  };
  onClose: () => void;
}

const RemarksCOAModal: React.FC<RemarksCOAProps> = ({ remarks, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold leading-6 text-darkFont" id="modal-headline">
              Remarks
            </h2>
            <p className="mt-1 text-darkFont">Route: {remarks.route}</p>
            <p className="mt-1 text-darkFont">Type: {remarks.type}</p>
            <p className="mt-1 text-darkFont">Notes: {remarks.notes}</p>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemarksCOAModal;
