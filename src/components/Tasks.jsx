import { React, useState } from "react";
import check from "../../public/check.svg";
import mais from "../../public/dots-three-vertical.svg";
import lapis from "../../public/pencil-simple.svg";
import lixeira from "../../public/trash-simple.svg";
import { StylesTasks } from "./tasks.style";

const Tasks = ({ stateBeforeChange, stateTaskChanger, stateChanger, ...ListData }) => {
  let data = ListData["ListData"];
  const [editing, isEditting] = useState(false);
  const [editId, setEditId] = useState();
  const [editItemValue, setEditItemValue] = useState();

  const changeToDone = (id) => {
    data
      .filter((x) => x.id === id)
      .map((x) => {
        x.isDone = true;
        stateChanger(x);
        return data;
      });
      stateBeforeChange(data)
    return stateTaskChanger(data);
  };

  const deleteTask = (id) => {
    const deleted = data.filter((x) => x.id !== id);
    stateBeforeChange(deleted)
    return stateTaskChanger(deleted);
  };

  const editTask = (id) => {
    isEditting(true);
    setEditId(id)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    data
      .filter((x) => x.id === editId)
      .map((x) => {
        x.nome = editItemValue;
        stateChanger(x);
        return data;
      });

    isEditting(!isEditting)
    stateBeforeChange(data)
    return stateTaskChanger(data);
    
  };

  return (
    <>
      <StylesTasks>
        {data.map(function (data, index) {
          return (
            <div>
              <li className={"task"} id={data.id} key={index}>
                <div className="list-item">
                  <div className="list-item__title">
                    <form action="" onSubmit={handleSubmit}>
                      <input
                        style={{
                          textDecoration: data.isDone ? "line-through" : "none",
                        }}
                        placeholder={data.nome}
                        disabled={!editing}
                        type="text"
                        onChange={(e) => setEditItemValue(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="list-item__options">
                    <div className="options">
                      {!data.isDone && (
                        <>
                          <span
                            className={"btn"}
                            onClick={() => changeToDone(data.id)}
                          >
                            <img src={check} alt="check" />
                          </span>
                          <span
                            className={"btn"}
                            onClick={() => editTask(data.id)}
                          >
                            <img src={lapis} alt="lapis" />
                          </span>
                        </>
                      )}
                      <span
                        className={"btn"}
                        onClick={() => deleteTask(data.id)}
                      >
                        <img src={lixeira} alt="lixeira" />
                      </span>

                      {/* <span className={"btn"}>
                        <img src={mais} alt="mais opções" />
                      </span> */}
                    </div>
                  </div>
                </div>
                {/* <div className={"button_options invisivel"}>
                  
                  <span className={"btn"}>
                    <img src={lixeira} alt="lixeira" />
                  </span>

                  <span className={"btn"}>
                    <img src={xis} alt="x" />
                  </span>
                </div> */}
              </li>
            </div>
          );
        })}
      </StylesTasks>
    </>
  );
};

export default Tasks;
