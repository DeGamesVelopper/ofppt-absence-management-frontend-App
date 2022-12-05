import Loading from "../Loading";
import "./table.css";

import { NextIcon, PreviousIcon } from "../../../Icons";

function CustomTable({
  COLLECTION_LENGTH,
  CurrentIndex,
  Next,
  Previous,
  onCRUDAction,
  headers,
  collection,
  OpenDeleteModal,
  OpenUpdateModal,
  headerColor,
}) {
  return (
    <div className="table">
      {
        /* delete or adding loading onCRUDAction*/
        onCRUDAction ? <Loading className="onLoading" /> : null
      }
      {
        collection && !collection.type ? ( // handle auth error here later
          <>
            <div className="pagination">
              <div className="current__table__page">
                <span>
                  {CurrentIndex.firstIndex} - {CurrentIndex.lastIndex} de{" "}
                  {COLLECTION_LENGTH}
                </span>
              </div>
              <PreviousIcon
                className="Icon pagination__Icon"
                onClick={Previous}
              />
              <NextIcon className="Icon pagination__Icon" onClick={Next} />
            </div>
            <table className="content-table">
              <thead>
                <tr
                  style={{
                    backgroundColor: headerColor,
                  }}
                >
                  {headers.map(head => (
                    <th key={Math.random(0, 100)}> {head} </th>
                  ))}
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {collection.map(item => (
                  <tr
                    key={item[Object.keys(item)[0]]}
                    style={
                      collection[collection.length - 1] === item
                        ? {
                            borderBottom: `0.125rem solid ${headerColor}`,
                          }
                        : null
                    }
                  >
                    <td> {item[Object.keys(item)[1]]} </td>
                    <td> {item[Object.keys(item)[2]]} </td>
                    <td
                      className="editIcon"
                      onClick={() => OpenUpdateModal(item._id)}
                    >
                      <img src="images/edit.png" alt="editing" />
                    </td>
                    <td
                      className="deleteIcon"
                      onClick={() => OpenDeleteModal(item._id)}
                    >
                      <img src="images/delete.png" alt="deleting" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="emptyTable"> NO Filiere </div>
        ) //remove this later
      }
    </div>
  );
}

export default CustomTable;
