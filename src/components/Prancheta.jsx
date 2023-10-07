import { useState, React } from "react";
import detalhe from "../../public/detalhe_prancheta.png";
import { StylesPrancheta } from "./prancheta.style";
import plus from "../../public/plus.svg";
import Tasks from "../components/Tasks";
import data from "../data/itens.json";
import { v4 as uuidv4 } from "uuid";

const Prancheta = () => {

  const [task, setTask] = useState(data);
  const [itens, setItem] = useState("");
  const [filter, setFilterItem] = useState("");
  const [beforeFilter, setBeforeFilter] = useState(task);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      id: uuidv4(),
      nome: itens,
      isDone: false,
    };

    const newList = task.concat(payload);
    setTask(newList);
    setBeforeFilter(newList);
    event.target.reset()
  };
  const handleFilter = (event) => {

    if (filter.length <= 1) {
      setTask(beforeFilter);
    } else {
      var filterData = task.filter((task) => task.nome.toLowerCase().includes(filter.toLowerCase()));
      setTask(filterData);
    }
  };

  return (
    <StylesPrancheta>
      <div className={"conteiner"}>
        <img
          src={detalhe}
          alt="detalhe-prancheta"
          className={"detalhe-prancheta"}
        />
        <div className={"content"}>
          <section className={"header"}>
            <h1>Lista de Tarefas</h1>
          </section>

          <section className={"list"}>
            <div className="containerHeader">
              <form
                action=""
                className={"form_new_task"}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className={"new_task"}
                  placeholder="Nova Tarefa"
                  onChange={(e) => setItem(e.target.value)}
                />
                <span>
                  <img src={plus} alt="plus" onClick={handleSubmit} />
                </span>
              </form>
              <form action="" className={"form_filter"}>
                <input
                  type="text"
                  className={"new_task"}
                  placeholder="Filtro"
                  onChange={(e) => handleFilter(setFilterItem(e.target.value))}
                />
              </form>
            </div>

            <ul className={"content_list"}>
              <Tasks
                stateTaskChanger={setTask}
                stateChanger={setItem}
                stateBeforeChange={setBeforeFilter}
                ListData={task}
              />
            </ul>
          </section>
        </div>
      </div>
    </StylesPrancheta>
  );
};

export default Prancheta;
