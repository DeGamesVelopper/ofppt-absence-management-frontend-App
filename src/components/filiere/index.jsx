import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  fetchFilieres,
  get_Ten_Filieres,
  editFiliere,
  deleteFiliere,
  addFiliere,
  getNextRows,
  getPrevRows,
  FilterFilieres,
} from "../../store/actions/filiereActions";

import Crud from "../CRUD/";

const Filiere = () => {
  //redux states
  const onCRUDAction = useSelector(state => state.flrStore.onCRUDAction);
  const filiereCollection = useSelector(state => state.flrStore.filieres);
  const COLLECTION_LENGTH = useSelector(state => state.flrStore.length);
  const currentIndex = useSelector(state => state.flrStore.currentIndex);
  const islogin = useSelector(state => state.auth.islogin);

  //loacl states
  const [newFiliere, setNewFiliere] = useState({ name: "", abvname: "" });

  const Inputs = [
    {
      keyValue: 1,
      placeholder: "Abréviation",
      value: newFiliere.abvname,
      setValue: val => setNewFiliere({ ...newFiliere, abvname: val }),
    },
    {
      keyValue: 2,
      placeholder: "Filière",
      value: newFiliere.name,
      setValue: val => setNewFiliere({ ...newFiliere, name: val }),
    },
  ];
  return !islogin ? (
    <Redirect to="/login" />
  ) : (
    <Crud
      _STATE={{
        _Value: newFiliere,
        _SetValue: setNewFiliere,
      }}
      FETCHDATA={fetchFilieres}
      NEW={{
        Create_Modal_title: "Nouveau Filière",
        AddObject: addFiliere,
        Create_Inputs: Inputs,
      }}
      EDIT={{
        Update_Modal_title: "Modification du filière",
        EditObject: editFiliere,
      }}
      DELETE={deleteFiliere}
      SEARCH={{
        SearchPlaceholeder: "Recherche du filière",
        FilterCollection: FilterFilieres,
        searchIconBgColor: "#0D0E14",
      }}
      LOADING={{ onCRUDAction }}
      TABLE_DATA={{
        Collection: filiereCollection,
        Headers: ["Abréviation", "Filière"],
        Get_Ten_Rows: get_Ten_Filieres,
        Next_Ten_Rows: getNextRows,
        Previous_Ten_Rows: getPrevRows,
        COLLECTION_LENGTH,
        CurrentIndex: currentIndex,
      }}
    />
  );
};

export default Filiere;
