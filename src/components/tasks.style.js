import styled from "styled-components";

export const StylesTasks = styled.div`

.task{
    width: 94%;
    display: flex;
    padding: 8px 0px;
    border-bottom: 1px solid var(--blueShadow);
}
.list-item{
    display: flex;
    width: 100%;
}
.text-decoration{
    text-decoration: line-through;

}
.list-item__title{
    display: flex;
    justify-content: flex-start;
    width: 75%;
}

.list-item__title input{
    text-decoration: none;
    outline: none;
    border: none;
}
.list-item__options{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 25%;
}
.options{
    display: flex;
    justify-content: space-between;
}
.button_options{
    display: flex;
    gap: 10px;
}
.btn{
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--blueShadow);
    cursor: pointer;
    transition: 0.3s;
}
.btn:hover{
    background-color: var(--blue100);
}
.visivel{
    display: flex;
}
.invisivel{
    display: none;
} 
`