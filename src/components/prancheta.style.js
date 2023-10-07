import styled from "styled-components";

export const StylesPrancheta = styled.div`
  
.conteiner{

    width: 660px;
    height: 60vh;
    background-color: antiquewhite;
}

.header{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue400);
}

.detalhe_prancheta{
    position: relative;
    top: -60px;
    left: calc(50% - 123.5px);
    z-index: 2;
} 


.content{
    position: relative;
    width: 100%;
    height: 400px;
    top: -110px;
    border: 40px solid var(--blue900);
    border-radius: 12px;
    background-color: var(--white);
}

.list{
    width: 100%;
    height: calc(100% - 70px);
    padding: 10px ;
}

.containerHeader{
    width: 100%;
    display: flex;
    height: 50px;
}
.form_new_task{
    width: 75%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 10px;
    border-radius: 8px;
    border: 2px dashed var(--blackShadow);
}
.form_filter{
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 10px;
    border-radius: 8px;
    border: 2px dashed var(--blackShadow);
}
.form_new_task span{
    cursor: pointer;
}
.new_task{
    width: 80%;
    border: none;
    outline: none;
    background-color: transparent;
}
.content_list{
    
    width: 100%;
    max-height: 190px;
    height: auto;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
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