import { useContext } from "react";
import CrudContext from "../Context/CrudContext";

const CrudTableRow = ({ el }) => {
  const {setDataToEdit, deleteData} = useContext(CrudContext)

  let { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
