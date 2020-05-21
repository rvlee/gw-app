import React from 'react';
import parse from 'html-react-parser';
import {
  getNewDeck,
} from '../../utils/getNewDeck';


const ModalBody = ({
  cardData,
  deckList,
  dataStructure,
  updateDeckQuantity,
  canEdit,
}) => {
  const renderBody = () => {
    const mapping = (arr, height, align, headerHeight) => {
      if (Array.isArray(arr) || Array.isArray(arr.rowData)) {
        const newArr = Array.isArray(arr) ? arr : arr.rowData;
        const width = Array.isArray(arr) ? '100%' : arr.width;
        const newHeight = Array.isArray(arr) ? null : arr.height;
        // const color = Array.isArray(arr) ? null : arr.color;
        // const align = Array.isArray(arr) ? null : arr.align;
        const newHeaderHeight = Array.isArray(arr) ? null : arr.headerHeight;

        return (
          <div
            className="modal-wrapper"
            style={{
              width: `${width}`,
            }}
          >
            {newArr.map((ele) => mapping(ele, newHeight, align, newHeaderHeight))}
          </div>
        );
      }
      let modalCmp = <div />;
      switch (arr.type) {
        case 'IMAGE':
          modalCmp = (
            <div
              className="row-content row-image"
              style={{
                width: `${arr.width}`,
              }}
            >
              <img
                style={{
                  width: '100%', height: '206px',
                }}
                src={cardData === null ? null : `${cardData[arr.key]}`}
              />
            </div>
          );
          break;

        default:
          modalCmp = (
            <div
              className="row-content "
              style={{
                width: `${arr.width}`, height: `${height}`,
              }}
            >
              <div
                className="top-row-content"
                style={{
                  backgroundColor: `${arr.color}`, height: `${headerHeight}`,
                }}
              >
                {arr.title}
              </div>
              <div
                className="bottom-row-content"
                style={{
                  textAlign: `${align}`,
                }}
              >
                {cardData === null
                  ? null : cardData[arr.key]
                    ? parse(`${cardData[arr.key]}`) : null}
              </div>
            </div>
          );
          break;
      }
      return modalCmp;
    };
    return (
      <React.Fragment>
        <div className="modal-table-wrapper">
          {mapping(dataStructure)}
        </div>
        {canEdit ? <button type="button" onClick={() => { updateDeckQuantity(getNewDeck(deckList, cardData, 1)); }}> Add to Deck </button> : null}
        {canEdit ? <button type="button" onClick={() => { updateDeckQuantity(getNewDeck(deckList, cardData, -1)); }}> Remove From Deck </button> : null}
      </React.Fragment>
    );
  };

  return renderBody();
};

export default ModalBody;
